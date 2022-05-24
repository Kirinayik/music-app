import { useNextCall } from "../../../hooks/useNextCall";
import { useRouter } from "next/router";
import { Box, Grid } from "@mui/material";
import { TopTitleContainer } from "../../../components/Top/Top.styles";
import { Title } from "../../../styles/global";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCircular from "../../../components/assets/LazyCircular";
import { GetServerSideProps, NextPage } from "next";
import LibraryCard from "../../../components/Library/LibraryCard/LibraryCard";
import SpotifyController from "../../../controllers/spotify";
import { errorHandler } from "../../../helpers/errorHandler";
import PagingObject = SpotifyApi.PagingObject;
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type PlaylistsProps = {
  playlists: PagingObject<PlaylistObjectFull>;
};

const Playlists: NextPage<PlaylistsProps> = ({ playlists }) => {
  const { items, fetchMore, nextUrl } = useNextCall(
    playlists.items,
    playlists.next
  );
  const { q } = useRouter().query;

  return (
    <Box padding={{ xs: "90px 15px 30px", sm: "90px 30px 30px" }}>
      <TopTitleContainer>
        <Title>All albums for &quot;{q}&quot;</Title>
      </TopTitleContainer>
      <InfiniteScroll
        next={fetchMore}
        hasMore={!!nextUrl}
        loader={<LazyCircular />}
        dataLength={items.length}
      >
        <Grid container spacing={3} columns={{ xs: 2, sm: 4, big: 6, xl: 8 }}>
          {items.map((playlist) => (
            <LibraryCard playlist={playlist} key={playlist.id} />
          ))}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default Playlists;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.q) {
    const { q } = context.params;
    try {
      const { playlists } = await SpotifyController.search(
        context.req,
        q,
        "playlist",
        15
      );

      return {
        props: { playlists },
      };
    } catch (e) {
      return errorHandler(e);
    }
  }

  return {
    props: {},
  };
};
