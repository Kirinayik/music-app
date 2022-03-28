import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import PagingObject = SpotifyApi.PagingObject;
import ArtistObjectFull = SpotifyApi.ArtistObjectFull;
import AlbumObjectSimplified = SpotifyApi.AlbumObjectSimplified;
import PlaylistObjectSimplified = SpotifyApi.PlaylistObjectSimplified;
import TrackObjectFull = SpotifyApi.TrackObjectFull;

type ISearch = {
  albums: PagingObject<AlbumObjectSimplified> | null;
  artists: PagingObject<ArtistObjectFull> | null;
  playlists: PagingObject<PlaylistObjectSimplified> | null;
  tracks: PagingObject<TrackObjectFull> | null;
  searchQuery: string;
}

const initialState:ISearch = {
  albums: null,
  artists: null,
  playlists: null,
  tracks: null,
  searchQuery: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action:PayloadAction<ISearch>) => {
      const {albums, artists, playlists, tracks, searchQuery} = action.payload

      state.albums = albums
      state.artists = artists
      state.playlists = playlists
      state.tracks = tracks
      state.searchQuery = searchQuery
    },
    setSearchQuery: (state, action:PayloadAction<string>) => {
      state.searchQuery = action.payload
    }
  }
})

export const {setSearch, setSearchQuery} = searchSlice.actions;
export default searchSlice.reducer;