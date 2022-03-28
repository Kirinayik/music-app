import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type ILoader = {
  isFetching: boolean;
}

const initialState:ILoader = {
  isFetching: false,
}

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, action:PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    }
  }
})

export const {setLoader} = loaderSlice.actions;
export default loaderSlice.reducer;