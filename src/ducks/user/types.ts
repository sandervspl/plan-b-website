import * as i from 'types';

export type UserState = i.BaseState<i.UserData> & {
  isSignedIn: boolean;
};

export type UserData = {
  username: string;
  discordname: string;
  avatar: string;
  id: string;
  fetchedAt: Date;
  authLevel: number;
}

export type FetchUser = i.BaseThunkAction<() => Promise<i.UserData | void>>;
