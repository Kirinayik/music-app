import { GetServerSideProps, NextPage } from "next";
import SpotifyController from "../../controllers/spotify";
import { errorHandler } from "../../helpers/errorHandler";
import { Box, Grid } from "@mui/material";
import FavouriteProfile from "../../components/Favourite/FavouriteProfile/FavouriteProfile";
import Track from "../../components/Track/Track";
import LazyCircular from "../../components/assets/LazyCircular";
import { useNextCall } from "../../hooks/useNextCall";
import InfiniteScroll from "react-infinite-scroll-component";
import UsersSavedTracksResponse = SpotifyApi.UsersSavedTracksResponse;

type FavouriteProps = {
  favourite: UsersSavedTracksResponse;
};

const Favourite: NextPage<FavouriteProps> = ({ favourite }) => {
  const { items, fetchMore, nextUrl } = useNextCall(
    favourite.items,
    favourite.next
  );

  return (
    <Box>
      <FavouriteProfile favourite={favourite} />
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

export default Favourite;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const favourite = await SpotifyController.getSavedTracks(context.req);

    return {
      props: { favourite },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
