import {configureStore} from "@reduxjs/toolkit";
import historyReducer from './history/history';
import loaderReducer from './loader/loader';
import searchReducer from './search/search';
import playerReducer from './player/player';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../types/types";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    history: historyReducer,
    search: searchReducer,
    player: playerReducer,
  }
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector