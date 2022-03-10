import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type IHistory = {
  prev: string[];
  next: string[];
}

const initialState:IHistory = {
  prev: [],
  next: []
}

const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToPrev: (state, action: PayloadAction<string>) => {
      if (state.prev[state.prev.length - 1] !== action.payload)
        state.prev.push(action.payload)
    },
    pushPrev: (state) => {
      const lastPrev = state.prev.pop()

      if (lastPrev)
        state.next.push(lastPrev)
    },
    pushNext: (state) => {
      const lastNext = state.next.pop()

      if (lastNext)
        state.prev.push(lastNext)
    }
  }
})

export const {addToPrev, pushPrev, pushNext} = historySlice.actions;
export default historySlice.reducer;