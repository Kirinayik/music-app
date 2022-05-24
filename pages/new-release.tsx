import { GetServerSideProps, NextPage } from "next";
import Spotify from "../controllers/spotify";
import { errorHandler } from "../helpers/errorHandler";
import { TopTitleContainer } from "../components/Top/Top.styles";
import { Title } from "../styles/global";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCircular from "../components/assets/LazyCircular";
import { Box, Grid } from "@mui/material";
import AlbumCard from "../components/Album/AlbumCard/AlbumCard";
import { useNextCall } from "../hooks/useNextCall";
import PagingObject = SpotifyApi.PagingObject;
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;

type NewReleaseProps = {
  albums: PagingObject<AlbumObjectSimplified>;
};

const NewRelease: NextPage<NewReleaseProps> = ({ albums }) => {
  const { items, fetchMore, nextUrl } = useNextCall(albums.items, albums.next);

  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>New release</Title>
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
          {items.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default NewRelease;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { albums } = await Spotify.newRelease(context.req, 30);

    return {
      props: { albums },
    };
  } catch (e) {
    return errorHandler(e);
  }
};
