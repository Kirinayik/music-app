import type {GetServerSideProps, NextPage} from 'next'
import {Box, CircularProgress, Grid} from "@mui/material";
import AlbumController from '../../controllers/album';
import AlbumProfile from "../../components/Album/AlbumProfile/AlbumProfile";
import Track from "../../components/Track/Track";
import {errorHandler} from "../../helpers/errorHandler";
import {useRouter} from "next/router";
import {useTheme} from "@emotion/react";
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import {useLoadTracks} from "../../hooks/useLoadTracks";

type AlbumProps = {
  album: AlbumObjectFull;
}

const Album: NextPage<AlbumProps> = ({album}) => {
  const theme = useTheme();
  const {id} = useRouter().query
  const {tracks, fetch, nextUrl} = useLoadTracks(album.tracks.items, album.tracks.next, id);

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
        {fetch && nextUrl && (
          <Box padding={'15px 0'} display={'flex'} justifyContent={'center'} color={theme.colors.green}>
            <CircularProgress color={'inherit'}/>
          </Box>
        )}
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

