import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { Stack } from "@mui/material";
import Spotify from "../controllers/spotify";
import { errorHandler } from "../helpers/errorHandler";
import NewRelease from "../components/NewRelease/NewRelease";
import FeaturedPlaylists from "../components/FeaturedPlaylists/FeaturedPlaylists";
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;
import PagingObject = SpotifyApi.PagingObject;
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type HomeProps = {
  albums: PagingObject<AlbumObjectSimplified>;
  playlists: PagingObject<PlaylistObjectFull>;
};

// eslint-disable-next-line react/prop-types
const Home: NextPage<HomeProps> = ({ albums, playlists }) => {
  return (
    <Stack rowGap={8} padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <NewRelease albums={albums} />
      <FeaturedPlaylists playlists={playlists} />
    </Stack>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { albums } = await Spotify.newRelease(context.req);
    const { playlists } = await Spotify.featuredPlaylists(context.req, 8);

    return {
      props: { albums, playlists },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
