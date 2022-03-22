import {Title} from "../../../styles/global";
import {Box, Grid} from "@mui/material";
import ArtistCard from "../../Artist/ArtistCard/ArtistCard";
import {TopLink, TopTitleContainer} from "../Top.styles";
import {FC} from "react";
import Link from 'next/link'
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type TopArtistsProps = {
  artists: ArtistObjectFull[];
}

const TopArtists:FC<TopArtistsProps> = ({artists}) => {
  return (
    <Box padding={{xs: '50px 15px 30px', sm: '50px 30px 30px'}}>
      <TopTitleContainer>
        <Title>Top artists this month</Title>
        <Link href={'/profile/artists'} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid container spacing={2} columns={{xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12}}>
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist}/>
        ))}
      </Grid>
    </Box>
  );
};

export default TopArtists;