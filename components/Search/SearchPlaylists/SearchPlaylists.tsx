import {TopLink, TopTitleContainer} from "../../Top/Top.styles";
import {Title} from "../../../styles/global";
import Link from "next/link";
import {Box, Grid} from "@mui/material";
import {FC} from "react";
import LibraryCard from "../../Library/LibraryCard/LibraryCard";
import {useAppSelector} from "../../../store";
import PagingObject = SpotifyApi.PagingObject;
import PlaylistObjectSimplified = SpotifyApi.PlaylistObjectSimplified;

type SearchPlaylistsProps = {
  playlists: PagingObject<PlaylistObjectSimplified> | null;
}

const SearchPlaylists:FC<SearchPlaylistsProps> = ({playlists}) => {
  const {searchQuery} = useAppSelector(state => state.search)

  return (
    <Box>
      <TopTitleContainer>
        <Title>Playlists</Title>
        <Link href={`/search/playlists/${searchQuery}`} passHref>
          <TopLink>see all</TopLink>
        </Link>
      </TopTitleContainer>
      <Grid container spacing={3} columns={{xs: 2, sm: 4, big: 6, xl: 8}}>
        {playlists && playlists.items.map(playlist => (
            <LibraryCard playlist={playlist} key={playlist.id}/>
          )
        )}
      </Grid>
    </Box>
  );
};

export default SearchPlaylists