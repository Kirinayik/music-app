import {GetServerSideProps, NextPage} from "next";
import {Box} from "@mui/material";
import {errorHandler} from "../../../helpers/errorHandler";
import ArtistAlbums from "../../../components/Artist/ArtistAlbums/ArtistAlbums";
import ArtistController from "../../../controllers/artist";
import {useNextCall} from "../../../hooks/useNextCall";
import LazyCircular from "../../../components/assets/LazyCircular";
import InfiniteScroll from "react-infinite-scroll-component";
import ArtistsAlbumsResponse = SpotifyApi.ArtistsAlbumsResponse;

type ArtistProps = {
  albums: ArtistsAlbumsResponse;
}

const Albums:NextPage<ArtistProps> = ({albums}) => {
  const {fetchMore, nextUrl, items} = useNextCall(albums.items, albums.next, 'include_groups=album,single')

  return (
    <Box padding={{xs: '90px 0 30px', sm: '90px 0 30px'}}>
      <InfiniteScroll next={fetchMore} hasMore={!!nextUrl} loader={<LazyCircular />} dataLength={items.length}>
        <ArtistAlbums albums={items} />
      </InfiniteScroll>
    </Box>
  );
};

export default Albums

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.id) {
    const {id} = context.params;
    try {
      const albums = await ArtistController.getArtistAlbums(context.req, id, 24)

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