import type {GetServerSideProps, NextPage} from 'next'
import {Box, Grid} from "@mui/material";
import AlbumController from '../../controllers/album';
import AlbumProfile from "../../components/Album/AlbumProfile/AlbumProfile";
import Track from "../../components/Track/Track";
import {errorHandler} from "../../helpers/errorHandler";
import {useNextCall} from "../../hooks/useNextCall";
import LazyCircular from "../../components/assets/LazyCircular";
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;

type AlbumProps = {
  album: AlbumObjectFull;
}

const Album: NextPage<AlbumProps> = ({album}) => {
  const {items:tracks, fetch, nextUrl} = useNextCall(album.tracks.items, album.tracks.next);

  return (
    <Box >
      <AlbumProfile album={album}/>
      <Box padding={{xs: '50px 15px 30px', sm: '50px 30px 30px'}}>
        <Grid container>
          {tracks.map((track, i) => (
              <Track track={track} index={i+1} key={track.id} type={'album'}/>
            )
          )}
        </Grid>
        <LazyCircular fetch={fetch} nextUrl={nextUrl}/>
      </Box>
    </Box>
  )
}

export default Album;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.id) {
    const {id} = context.params;
    try {
      const album = await AlbumController.getAlbum(context.req, id)

      return {
        props: { album },
      };
    } catch (e) {
      return errorHandler(e)
    }
  }

  return {
    props: {},
  };
}

