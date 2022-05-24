import { Box, Grid } from "@mui/material";
import { TopLink, TopTitleContainer } from "../../Top/Top.styles";
import { Title } from "../../../styles/global";
import Link from "next/link";
import ArtistCard from "../../Artist/ArtistCard/ArtistCard";
import { FC } from "react";
import { useAppSelector } from "../../../store";
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import PagingObject = SpotifyApi.PagingObject;

type SearchArtistsProps = {
  artists: PagingObject<ArtistObjectFull> | null;
};

const SearchArtists: FC<SearchArtistsProps> = ({ artists }) => {
  const { searchQuery } = useAppSelector((state) => state.search);

  return (
    <Box>
      <TopTitleContainer>
        <Title>Artists</Title>
        <Link href={`/search/artists/${searchQuery}`} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
      >
        {artists &&
          artists.items.map((artist) => (
            <ArtistCard artist={artist} key={artist.id} />
          ))}
      </Grid>
    </Box>
  );
};

export default SearchArtists;
