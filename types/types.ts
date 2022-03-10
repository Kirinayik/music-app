import {store} from "../frontend/store";

export type ItemPlayProps = {
  isPlay?: boolean;
}

export interface IUser {
  username: string | null | undefined;
  email: string | null | undefined;
  image: string | null | undefined;
}

export type UserResponse = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined

export type IProgress = {
  isLoading: boolean;
}

export type ILogin = {
  username: string;
  password: string;
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch