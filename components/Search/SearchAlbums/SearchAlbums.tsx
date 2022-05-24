import { TopLink, TopTitleContainer } from "../../Top/Top.styles";
import { Title } from "../../../styles/global";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import AlbumCard from "../../Album/AlbumCard/AlbumCard";
import { FC } from "react";
import { useAppSelector } from "../../../store";
import PagingObject = SpotifyApi.PagingObject;
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;

type SearchAlbumsProps = {
  albums: PagingObject<AlbumObjectSimplified> | null;
};

const SearchAlbums: FC<SearchAlbumsProps> = ({ albums }) => {
  const { searchQuery } = useAppSelector((state) => state.search);

  return (
    <Box>
      <TopTitleContainer>
        <Title>Albums</Title>
        <Link href={`/search/albums/${searchQuery}`} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
      >
        {albums &&
          albums.items.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))}
      </Grid>
    </Box>
  );
};

export default SearchAlbums;
