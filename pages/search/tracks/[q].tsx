import { useNextCall } from "../../../hooks/useNextCall";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { TopTitleContainer } from "../../../components/Top/Top.styles";
import { Title } from "../../../styles/global";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCircular from "../../../components/assets/LazyCircular";
import { nanoid } from "@reduxjs/toolkit";
import { GetServerSideProps, NextPage } from "next";
import Track from "../../../components/Track/Track";
import SpotifyController from "../../../controllers/spotify";
import { errorHandler } from "../../../helpers/errorHandler";
import PagingObject = SpotifyApi.PagingObject;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type TracksProps = {
  tracks: PagingObject<TrackObjectFull>;
};

const Tracks: NextPage<TracksProps> = ({ tracks }) => {
  const { items, fetchMore, nextUrl } = useNextCall(tracks.items, tracks.next);
  const { q } = useRouter().query;

  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>All tracks for &quot;{q}&quot;</Title>
      </TopTitleContainer>
      <InfiniteScroll
        next={fetchMore}
        hasMore={!!nextUrl}
        loader={<LazyCircular />}
        dataLength={items.length}
      >
        <Grid container rowSpacing={2}>
          {items.map((track, i) => (
            <Track track={track} key={nanoid()} index={i + 1} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Tracks;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.q) {
    const { q } = context.params;
    try {
      const { tracks } = await SpotifyController.search(
        context.req,
        q,
        "track",
        15
      );

      return {
        props: { tracks },
      };
    } catch (e) {
      return errorHandler(e);
    }
  }

  return {
    props: {},
  };
};
