import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import {FC} from "react";
import {Box, Grid} from "@mui/material";
import {Title} from "../../../styles/global";
import {TopLink, TopTitleContainer} from "../../Top/Top.styles";
import AlbumCard from "../../Album/AlbumCard/AlbumCard";

type ArtistAlbumsProps = {
  albums: AlbumObjectFull[];
}

const ArtistAlbums:FC<ArtistAlbumsProps> = ({albums}) => {
  return (
    <Box padding={{xs: '10px 15px 30px', sm: '10px 30px 30px'}}>
      <TopTitleContainer>
        <Title>Albums</Title>
        <TopLink>see discography</TopLink>
      </TopTitleContainer>
      <Grid container spacing={2} columns={{xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12}}>
        {albums.map(album => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default ArtistAlbums