import {useNextCall} from "../hooks/useNextCall";
import {Box, Grid} from "@mui/material";
import {TopTitleContainer} from "../components/Top/Top.styles";
import {Title} from "../styles/global";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCircular from "../components/assets/LazyCircular";
import LibraryCard from "../components/Library/LibraryCard/LibraryCard";
import {FC} from "react";
import {GetServerSideProps} from "next";
import Spotify from "../controllers/spotify";
import {errorHandler} from "../helpers/errorHandler";
import PagingObject = SpotifyApi.PagingObject;
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type FeaturedPlaylistsProps = {
  playlists: PagingObject<PlaylistObjectFull>;
}

const FeaturedPlaylists:FC<FeaturedPlaylistsProps> = ({playlists}) => {
  console.log(playlists)
  const {items, fetchMore, nextUrl} = useNextCall(playlists.items, playlists.next)

  return (
    <Box padding={{xs: '90px 15px 30px', sm: '90px 30px 30px'}}>
      <TopTitleContainer>
        <Title>Featured playlists</Title>
      </TopTitleContainer>
      <InfiniteScroll next={fetchMore} hasMore={!!nextUrl} loader={<LazyCircular />} dataLength={items.length}>
        <Grid container spacing={3} columns={{xs: 2, sm: 4, big: 6, xl: 8}}>
          {items.map(playlist => (
              <LibraryCard playlist={playlist} key={playlist.id}/>
            )
          )}
        </Grid>
      </InfiniteScroll>
    </Box>
  );
};

export default FeaturedPlaylists

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const {playlists} = await Spotify.featuredPlaylists(context.req, 30);

    return {
      props: { playlists },
    };
  } catch (e) {
    return errorHandler(e)
  }
}