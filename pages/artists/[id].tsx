import type {GetServerSideProps, NextPage} from 'next'
import {Box} from "@mui/material";
import ArtistController from '../../controllers/artist'
import ArtistPopular from "../../components/Artist/ArtistPopular/ArtistPopular";
import ArtistProfile from "../../components/Artist/ArtistProfile/ArtistProfile";
import ArtistAlbums from "../../components/Artist/ArtistAlbums/ArtistAlbums";
import {errorHandler} from "../../helpers/errorHandler";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import TrackObjectFull = SpotifyApi.TrackObjectFull;
import AlbumObjectFull = SpotifyApi.AlbumObjectFull;

type ArtistProps = {
  artist: ArtistObjectFull;
  topTracks: TrackObjectFull[];
  albums: AlbumObjectFull[];
}

const Artist: NextPage<ArtistProps> = ({artist, topTracks, albums}) => {
  return (
    <Box>
      <ArtistProfile artist={artist}/>
      <ArtistPopular topTracks={topTracks}/>
      <ArtistAlbums albums={albums}/>
    </Box>
  )
}

export default Artist;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (context?.params?.id) {
    const {id} = context.params;
    try {
      const artist = await ArtistController.getArtist(context.req, id)
      const topTracks = await ArtistController.getTopArtistTracks(context.req, id)
      const albums = await ArtistController.getArtistAlbums(context.req, id)

      return {
        props: { artist, topTracks, albums },
      };
    } catch (e) {
      return errorHandler(e)
    }
  }

  return {
    props: {},
  };
}

