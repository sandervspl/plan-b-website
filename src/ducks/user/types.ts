import * as i from 'types';

export type UserState = i.BaseState<i.UserData>;

export type UserData = {
  username: string;
  avatar: string;
  id: string;
  fetchedAt: Date;
  authLevel: number;
}

export type FetchUser<T = Promise<i.UserData>> = () => T;
export type FetchUserDuck = FetchUser<i.ThunkAction<Promise<i.UserData>>>;
