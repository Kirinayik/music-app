import {NextPage} from "next";
import {Stack} from "@mui/material";
import {useAppSelector} from "../../store";
import SearchArtists from "../../components/Search/SearchArtists/SearchArtists";
import SearchTracks from "../../components/Search/SearchTracks/SearchTracks";
import SearchAlbums from "../../components/Search/SearchAlbums/SearchAlbums";
import SearchPlaylists from "../../components/Search/SearchPlaylists/SearchPlaylists";

const Search:NextPage = () => {
  const {artists, tracks, albums, playlists} = useAppSelector(state => state.search)

  return (
      <Stack rowGap={8} padding={{xs: '90px 15px 30px', sm: '90px 30px 30px'}}>
        {artists?.items && artists?.items.length > 0 && <SearchArtists artists={artists}/>}
        {tracks?.items && tracks?.items.length > 0 && <SearchTracks tracks={tracks}/>}
        {albums?.items && albums?.items.length > 0 && <SearchAlbums albums={albums}/>}
        {playlists?.items && playlists?.items.length > 0 && <SearchPlaylists playlists={playlists}/>}
      </Stack>
  );
};

export default Search;