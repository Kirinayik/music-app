import {GetServerSideProps, NextPage} from "next";
import {Box} from "@mui/material";
import {errorHandler} from "../../../helpers/errorHandler";
import ArtistAlbums from "../../../components/Artist/ArtistAlbums/ArtistAlbums";
import ArtistController from "../../../controllers/artist";
import {useNextCall} from "../../../hooks/useNextCall";
import LazyCircular from "../../../components/assets/LazyCircular";
import ArtistsAlbumsResponse = SpotifyApi.ArtistsAlbumsResponse;

type ArtistProps = {
  albums: ArtistsAlbumsResponse;
}

const Albums:NextPage<ArtistProps> = ({albums}) => {
  const {items, fetch, nextUrl} = useNextCall(albums.items, albums.next, 'include_groups=album,single')

  return (
    <Box padding={{xs: '90px 0 30px', sm: '90px 0 30px'}}>
      <ArtistAlbums albums={items} />
      <LazyCircular fetch={fetch} nextUrl={nextUrl}/>
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