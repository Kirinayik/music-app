import { GetServerSideProps, NextPage } from "next";
import SpotifyController from "../../controllers/spotify";
import { errorHandler } from "../../helpers/errorHandler";
import { Box, Grid } from "@mui/material";
import PlaylistProfile from "../../components/Playlist/PlaylistProfile/PlaylistProfile";
import { useNextCall } from "../../hooks/useNextCall";
import Track from "../../components/Track/Track";
import LazyCircular from "../../components/assets/LazyCircular";
import InfiniteScroll from "react-infinite-scroll-component";
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type PlaylistProps = {
  playlist: PlaylistObjectFull;
};

const Playlist: NextPage<PlaylistProps> = ({ playlist }) => {
  const { items, fetchMore, nextUrl } = useNextCall(
    playlist.tracks.items,
    playlist.tracks.next
  );

  return (
    <Box>
      <PlaylistProfile playlist={playlist} />
      <Box padding={{ xs: "50px 15px 30px", sm: "50px 30px 30px" }}>
        <InfiniteScroll
          next={fetchMore}
          hasMore={!!nextUrl}
          loader={<LazyCircular />}
          dataLength={items.length}
        >
          <Grid container>
            {items.map((item, i) => (
              <Track track={item.track} index={i + 1} key={item.track.id} />
            ))}
          </Grid>
        </InfiniteScroll>
      </Box>
    </Box>
  );
};

export default Playlist;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.id) {
    const { id } = context.params;
    try {
      const playlist = await SpotifyController.getPlaylist(context.req, id);

      return {
        props: { playlist },
      };
    } catch (e) {
      return errorHandler(e);
    }
  }

  return {
    props: {},
  };
};
