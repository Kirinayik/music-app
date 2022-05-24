import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IPlayer = {
  id: string;
  href: string | null;
  isPlaying: boolean;
  playerRef: any;
};

const initialState: IPlayer = {
  id: "",
  href: "",
  playerRef: "",
  isPlaying: false,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setTrack: (state, action: PayloadAction<any>) => {
      const { id, href } = action.payload;
      state.id = id;
      state.href = href;
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setPlayerRef: (state, action) => {
      state.playerRef = action.payload;
    },
  },
});

export const { setTrack, setIsPlaying, setPlayerRef } = playerSlice.actions;
export default playerSlice.reducer;
