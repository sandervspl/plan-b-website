import * as i from 'types';

export type UserState = i.BaseState<i.UserData>;

export type UserData = {
  username: string;
  avatar: string;
  id: string;
  fetchedAt: Date;
  authLevel: number;
}

export type FetchUser<T = Promise<void>> = () => T;
export type FetchUserDuck = FetchUser<i.ThunkAction<Promise<void | i.UserData>>>;
