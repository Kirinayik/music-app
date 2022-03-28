import {useNextCall} from "../../../hooks/useNextCall";
import {useRouter} from "next/router";
import {Box, Grid} from "@mui/material";
import {TopTitleContainer} from "../../../components/Top/Top.styles";
import {Title} from "../../../styles/global";
import InfiniteScroll from "react-infinite-scroll-component";
import LazyCircular from "../../../components/assets/LazyCircular";
import AlbumCard from "../../../components/Album/AlbumCard/AlbumCard";
import {GetServerSideProps, NextPage} from "next";
import SpotifyController from "../../../controllers/spotify";
import {errorHandler} from "../../../helpers/errorHandler";
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import PagingObject = SpotifyApi.PagingObject;

type AlbumsProps = {
  albums: PagingObject<AlbumObjectFull>;
}

const Albums:NextPage<AlbumsProps> = ({albums}) => {
  const {items, fetchMore, nextUrl} = useNextCall(albums.items, albums.next)
  const {q} = useRouter().query

  return (
    <Box padding={{xs: '90px 15px 30px', sm: '90px 30px 30px'}}>
      <TopTitleContainer>
        <Title>All albums for &quot;{q}&quot;</Title>
      </TopTitleContainer>
      <InfiniteScroll next={fetchMore} hasMore={!!nextUrl} loader={<LazyCircular />} dataLength={items.length}>
        <Grid container spacing={2} columns={{xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12}}>
          {items.map(album => (
              <AlbumCard album={album} key={album.id}/>
            )
          )}
        </Grid>
      </InfiniteScroll>
    </Box>
  )
};

export default Albums;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.q) {
    const {q} = context.params;
    try {
      const {albums} = await SpotifyController.search(context.req, q, 'album', 15)

      return {
        props: { albums },
      };
    } catch (e) {
      return errorHandler(e)
    }
  }

  return {
    props: {},
  };
}