import type {GetServerSideProps, NextPage} from 'next'
import {getSession} from "next-auth/react";
import {Box} from "@mui/material";
import Spotify from '../../controllers/spotify'
import User from "../../components/User/User";
import ArtistPopular from "../../components/Artist/ArtistPopular";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

export type ArtistProps = {
  artist: ArtistObjectFull;
  topTracks: TrackObjectFull[]
}

const Artist: NextPage<ArtistProps> = ({artist: {name, followers,images}, topTracks}) => {

  return (
    <Box>
      <User type={'artist'} artist={{name, images, followers: followers.total}}/>
      <ArtistPopular topTracks={topTracks}/>
    </Box>
  )
}

export default Artist;

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
      const artist = await Spotify.getArtist(context.req, id)
      const topTracks = await Spotify.getTopArtistTracks(context.req, id)

      return {
        props: { session, artist, topTracks },
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

