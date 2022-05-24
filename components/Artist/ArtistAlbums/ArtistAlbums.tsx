import AlbumObjectFull = SpotifyApi.AlbumObjectFull;
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;
import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { Title } from "../../../styles/global";
import { TopLink, TopTitleContainer } from "../../Top/Top.styles";
import AlbumCard from "../../Album/AlbumCard/AlbumCard";
import Link from "next/link";
import { useRouter } from "next/router";

type ArtistAlbumsProps = {
  albums: AlbumObjectFull[] | AlbumObjectSimplified[];
};

const ArtistAlbums: FC<ArtistAlbumsProps> = ({ albums }) => {
  const { id } = useRouter().query;

  return (
    <Box padding={{ xs: "10px 15px 30px", sm: "10px 30px 30px" }}>
      <TopTitleContainer>
        <Title>Albums</Title>
        {albums.length <= 6 && (
          <Link href={`/artists/${id}/albums`} passHref>
            <TopLink>see discography</TopLink>
          </Link>
        )}
      </TopTitleContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
      >
        {albums.map((album) => (
          <AlbumCard album={album} key={album.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default ArtistAlbums;
