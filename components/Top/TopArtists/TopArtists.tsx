import {Title} from "../../../styles/global";
import {Box, Grid} from "@mui/material";
import ArtistCard from "../../Artist/ArtistCard/ArtistCard";
import {TopLink, TopTitleContainer} from "../Top.styles";
import {FC} from "react";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;

type TopArtistsProps = {
  artists: ArtistObjectFull[];
}

const TopArtists:FC<TopArtistsProps> = ({artists}) => {
  const filteredArtists = artists.filter((_, index) => index < 6)

  return (
    <Box padding={{xs: '50px 15px 30px', sm: '50px 30px 30px'}}>
      <TopTitleContainer>
        <Title>Top artists this month</Title>
        <TopLink>see all</TopLink>
      </TopTitleContainer>
      <Grid container spacing={2} columns={{xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12}}>
        {filteredArtists && filteredArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist}/>
        ))}
      </Grid>
    </Box>
  );
};

export default TopArtists;