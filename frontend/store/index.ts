import {configureStore} from "@reduxjs/toolkit";
import historyReducer from './history/history';
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../types/types";

export const store = configureStore({
  reducer: {
    history: historyReducer
  }
})

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector