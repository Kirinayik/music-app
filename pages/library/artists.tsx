import {GetServerSideProps, NextPage} from "next";
import {getSession} from "next-auth/react";
import {Box, Grid, Typography} from "@mui/material";
import Spotify from "../../controllers/spotify";
import ArtistCard from "../../components/Artist/ArtistCard/ArtistCard";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type ArtistsProps = {
  artists: ArtistObjectFull[];
}

const Artists:NextPage<ArtistsProps> = ({artists}) => {
  return (
    <Box padding={{xs: '90px 15px 40px', sm: '90px 30px 40px'}}>
      <Box marginBottom={'30px'}>
        <Typography component={'h3'} fontSize={'24px'} fontWeight={'700'}>
          Artists
        </Typography>
      </Box>
      {artists.length > 0 ? (
        <Grid container spacing={3} columns={{xs: 2, tiny: 4, sm: 6, big: 8, lg: 12}}>
          {artists.map((artist) => (
            <ArtistCard artist={artist} key={artist.id}/>
          ))}
        </Grid>
      ) : (
        <Box display={'flex'} justifyContent={'center'}>
          <Typography fontWeight={'700'} fontSize={{xs: '30px', tiny: '50px'}}>
            No followed artists
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Artists

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const artists = await Spotify.getArtists(context.req)

  return {
    props: { session, artists},
  };
}