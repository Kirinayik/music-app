import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loader/loader";
import searchReducer from "./search/search";
import playerReducer from "./player/player";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types/types";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    search: searchReducer,
    player: playerReducer,
  },
});

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
