import { GetServerSideProps, NextPage } from "next";
import { Box, Grid, Typography } from "@mui/material";
import Spotify from "../../controllers/spotify";
import LibraryCard from "../../components/Library/LibraryCard/LibraryCard";
import { errorHandler } from "../../helpers/errorHandler";
import FavouriteCard from "../../components/Favourite/FavouriteCard/FavouriteCard";
import { useNextCall } from "../../hooks/useNextCall";
import LazyCircular from "../../components/assets/LazyCircular";
import InfiniteScroll from "react-infinite-scroll-component";
import ListOfCurrentUsersPlaylistsResponse = SpotifyApi.ListOfCurrentUsersPlaylistsResponse;

type PlaylistsProps = {
  playlists: ListOfCurrentUsersPlaylistsResponse;
  savedTracksLength: number;
};

const Playlists: NextPage<PlaylistsProps> = ({
  playlists,
  savedTracksLength,
}) => {
  const { items, fetchMore, nextUrl } = useNextCall(
    playlists.items,
    playlists.next
  );

  return (
    <Box padding={{ xs: "90px 15px 40px", sm: "90px 30px 40px" }}>
      <Box marginBottom={"30px"}>
        <Typography component={"h3"} fontSize={"24px"} fontWeight={"700"}>
          Playlists
        </Typography>
      </Box>
      {items.length > 0 ? (
        <InfiniteScroll
          next={fetchMore}
          hasMore={!!nextUrl}
          loader={<LazyCircular />}
          dataLength={items.length}
        >
          <Grid container spacing={3} columns={{ xs: 2, sm: 4, big: 6, xl: 8 }}>
            {savedTracksLength > 0 && (
              <FavouriteCard total={savedTracksLength} />
            )}
            {items.map((playlist) => (
              <LibraryCard playlist={playlist} key={playlist.id} />
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <Box display={"flex"} justifyContent={"center"}>
          <Typography
            fontWeight={"700"}
            fontSize={{ xs: "30px", tiny: "50px" }}
          >
            No saved playlists
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Playlists;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const playlists = await Spotify.getPlaylists(context.req);
    const { total: savedTracksLength } = await Spotify.getSavedTracks(
      context.req,
      1
    );

    return {
      props: { playlists, savedTracksLength },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
