import type {GetServerSideProps, NextPage} from 'next'
import {getSession} from "next-auth/react";
import {Box, Grid} from "@mui/material";
import Spotify from '../../controllers/spotify'
import AlbumProfile from "../../components/Album/AlbumProfile/AlbumProfile";
import Track from "../../components/Track/Track";
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type AlbumProps = {
  album: AlbumObjectFull;
  albumTracks: TrackObjectFull[];
}

const Album: NextPage<AlbumProps> = ({album, albumTracks}) => {
  console.log(albumTracks)

  return (
    <Box >
      <AlbumProfile album={album}/>
      <Box padding={{xs: '50px 15px 30px', sm: '50px 30px 30px'}}>
        <Grid container>
          {albumTracks.map((track, i) => (
              <Track track={track} index={i+1} key={track.id} type={'album'}/>
            )
          )}
        </Grid>
      </Box>
    </Box>
  )
}

export default Album;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  if (context?.params?.id) {
    const {id} = context.params;
    try {
      const album = await Spotify.getAlbum(context.req, id)
      const albumTracks = await Spotify.getAlbumTracks(context.req, id)

      return {
        props: { session, album, albumTracks },
      };
    } catch (e) {
      return {
        redirect: {
          destination: '/page_not_found',
          permanent: false,
        }
      }
    }
  }

  return {
    props: { session },
  };
}

