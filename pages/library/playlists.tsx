import {GetServerSideProps, NextPage} from "next";
import {Box, Grid, Typography} from "@mui/material";
import Spotify from '../../controllers/spotify'
import LibraryCard from "../../components/Library/LibraryCard/LibraryCard";
import {errorHandler} from "../../helpers/errorHandler";
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;

type PlaylistsProps = {
  playlists: PlaylistObjectFull[];
}

const Playlists:NextPage<PlaylistsProps> = ({playlists}) => {
  return (
    <Box padding={{xs: '90px 15px 40px', sm: '90px 30px 40px'}}>
      <Box marginBottom={'30px'}>
        <Typography component={'h3'} fontSize={'24px'} fontWeight={'700'}>
          Playlists
        </Typography>
      </Box>
      {playlists.length > 0 ? (
        <Grid container spacing={3} columns={{xs: 2, sm: 4, big: 6, xl: 8}}>
          {playlists.map((playlist) => (
            <LibraryCard playlist={playlist} key={playlist.id}/>
          ))}
        </Grid>
      ) : (
        <Box display={'flex'} justifyContent={'center'}>
          <Typography fontWeight={'700'} fontSize={{xs: '30px', tiny: '50px'}}>
            No saved playlists
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Playlists

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const playlists = await Spotify.getPlaylists(context.req)

    return {
      props: { playlists },
    };
  } catch (e) {
    return errorHandler(e)
  }
}