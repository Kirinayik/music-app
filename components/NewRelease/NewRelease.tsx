import { Box, Grid } from "@mui/material";
import { TopLink, TopTitleContainer } from "../Top/Top.styles";
import { Title } from "../../styles/global";
import Link from "next/link";
import AlbumCard from "../Album/AlbumCard/AlbumCard";
import { FC } from "react";
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;
import PagingObject = SpotifyApi.PagingObject;

type NewReleaseProps = {
  albums: PagingObject<AlbumObjectSimplified>;
};

const NewRelease: FC<NewReleaseProps> = ({ albums }) => {
  return (
    <Box>
      <TopTitleContainer>
        <Title>New release</Title>
        {albums?.items && (
          <Link href={`/new-release`} passHref>
            <TopLink>see all</TopLink>
          </Link>
        )}
      </TopTitleContainer>
      <Grid
        container
        spacing={2}
        columns={{ xs: 2, tiny: 4, sm: 6, md: 8, big: 10, lg: 12 }}
      >
        {albums?.items &&
          albums.items.map((album) => (
            <AlbumCard album={album} key={album.id} />
          ))}
      </Grid>
    </Box>
  );
};

export default NewRelease;
