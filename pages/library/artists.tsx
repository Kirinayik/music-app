import {GetServerSideProps, NextPage} from "next";
import {Box, Grid, Typography} from "@mui/material";
import ArtistController from "../../controllers/artist";
import ArtistCard from "../../components/Artist/ArtistCard/ArtistCard";
import {errorHandler} from "../../helpers/errorHandler";
import {useNextCall} from "../../hooks/useNextCall";
import LazyCircular from "../../components/assets/LazyCircular";
import InfiniteScroll from "react-infinite-scroll-component";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import CursorBasedPagingObject = SpotifyApi.CursorBasedPagingObject;

type ArtistsProps = {
  artists: CursorBasedPagingObject<ArtistObjectFull>;
}

const Artists:NextPage<ArtistsProps> = ({artists}) => {
  const {items, fetchMore, nextUrl} = useNextCall(artists.items, artists.next)

  return (
    <Box padding={{xs: '90px 15px 40px', sm: '90px 30px 40px'}}>
      <Box marginBottom={'30px'}>
        <Typography component={'h3'} fontSize={'24px'} fontWeight={'700'}>
          Artists
        </Typography>
      </Box>
      {items.length > 0 ? (
        <InfiniteScroll next={fetchMore} hasMore={!!nextUrl} loader={<LazyCircular />} dataLength={items.length}>
        <Grid container spacing={3} columns={{xs: 2, tiny: 4, sm: 6, big: 8, lg: 12}}>
              {items.map((artist) => (
                <ArtistCard artist={artist} key={artist.id}/>
              ))}
        </Grid>
        </InfiniteScroll>
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
  try {
    const {artists} = await ArtistController.getArtists(context.req)

    return {
      props: { artists},
    };
  } catch (e) {
    return errorHandler(e)
  }
}