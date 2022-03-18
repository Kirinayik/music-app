import {store} from "../store";
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      'black-hover': string;
      'black-highlight': string;
      green: string;
      white: string;
      grey: string;
    };
  }
}

declare module "@mui/material" {
  interface BreakpointOverrides {
    tiny: true;
    big: true;
  }
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch