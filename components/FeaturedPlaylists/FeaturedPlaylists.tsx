import {FC} from "react";
import {TopLink, TopTitleContainer} from "../Top/Top.styles";
import {Title} from "../../styles/global";
import Link from "next/link";
import {Box, Grid} from "@mui/material";
import LibraryCard from "../Library/LibraryCard/LibraryCard";
import PlaylistObjectFull = SpotifyApi.PlaylistObjectFull;
import PagingObject = SpotifyApi.PagingObject;

type FeaturedPlaylistsProps = {
  playlists: PagingObject<PlaylistObjectFull>;
}

const FeaturedPlaylists:FC<FeaturedPlaylistsProps> = ({playlists}) => {
  return (
    <Box>
      <TopTitleContainer>
        <Title>Featured playlists</Title>
        <Link href={`/featured-playlists`} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid container spacing={3} columns={{xs: 2, sm: 4, big: 6, xl: 8}}>
        {playlists.items.map(playlist => (
            <LibraryCard playlist={playlist} key={playlist.id}/>
          )
        )}
      </Grid>
    </Box>
  );
};

export default FeaturedPlaylists;