import { GetServerSideProps, NextPage } from "next";
import SpotifyController from "../../../controllers/spotify";
import { errorHandler } from "../../../helpers/errorHandler";
import { Box, Grid } from "@mui/material";
import { Title } from "../../../styles/global";
import { TopTitleContainer } from "../../../components/Top/Top.styles";
import { useRouter } from "next/router";
import LazyCircular from "../../../components/assets/LazyCircular";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNextCall } from "../../../hooks/useNextCall";
import ArtistCard from "../../../components/Artist/ArtistCard/ArtistCard";
import { nanoid } from "@reduxjs/toolkit";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import PagingObject = SpotifyApi.PagingObject;

type ArtistsProps = {
  artists: PagingObject<ArtistObjectFull>;
};

const Artists: NextPage<ArtistsProps> = ({ artists }) => {
  const { items, fetchMore, nextUrl } = useNextCall(
    artists.items,
    artists.next
  );
  const { q } = useRouter().query;

  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>All artists for &quot;{q}&quot;</Title>
      </TopTitleContainer>
      <InfiniteScroll
        next={fetchMore}
        hasMore={!!nextUrl}
        loader={<LazyCircular />}
        dataLength={items.length}
      >
        <Grid
          container
          spacing={2}
          columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
        >
          {items.map((artist) => (
            <ArtistCard artist={artist} key={nanoid()} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Artists;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.q) {
    const { q } = context.params;
    try {
      const { artists } = await SpotifyController.search(
        context.req,
        q,
        "artist",
        15
      );

      return {
        props: { artists },
      };
    } catch (e) {
      return errorHandler(e);
    }
  }

  return {
    props: {},
  };
};
