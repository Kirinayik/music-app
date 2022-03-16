import {GetServerSideProps, NextPage} from "next";
import {getSession} from "next-auth/react";
import {Box} from "@mui/material";
import User from "../components/User/User";
import TopArtists from "../components/Top/TopArtists";
import Spotify from "../controllers/spotify";
import TopTracks from "../components/Top/TopTracks";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type ProfileProps = {
  artists: ArtistObjectFull[];
  tracks: TrackObjectFull[];
}

const Profile:NextPage<ProfileProps> = ({artists, tracks}) => {
  return (
    <Box>
      <User type={'profile'}/>
      {artists.length > 0 && <TopArtists artists={artists}/>}
      {tracks.length > 0 && <TopTracks tracks={tracks}/>}
    </Box>
  );
};

export default Profile

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

  const artists = await Spotify.getTopItems(context.req, 'artists', 6);
  const tracks = await Spotify.getTopItems(context.req, 'tracks', 4);

  return {
    props: { session, artists, tracks },
  };
}