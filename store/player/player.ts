import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type IPlayer = {
  volume: number;
  currentTime: number;
  id: string;
  name: string;
  image: string;
  artist: {
    name: string;
    id: string;
  };
  href: string | null;
  isPlaying: boolean;
}

const initialState:IPlayer = {
  volume: 0,
  currentTime: 0,
  id: '',
  name: '',
  image: '',
  artist: {
    name: '',
    id: ''
  },
  href: '',
  isPlaying: false,
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setTrack: (state, action:PayloadAction<any>) => {
      const {name, id, href, artist, image} = action.payload
      state.name = name
      state.artist = artist
      state.id = id
      state.href = href
      state.image = image
      state.isPlaying = true
    },
    setIsPlaying: (state) => {
      if (state.isPlaying) {
        state.isPlaying = false
      } else {
        state.isPlaying = true
      }
    },
    setCurrentTime: (state, action:PayloadAction<number>) => {
      state.currentTime = action.payload
    }
  }
})

export const {setTrack, setIsPlaying, setCurrentTime, } = playerSlice.actions;
export default playerSlice.reducer;