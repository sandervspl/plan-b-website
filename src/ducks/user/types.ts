import * as i from 'types';

export enum AUTH_LEVEL {
  'USER',
  'ADMIN'
}

export type UserState = i.BaseState<i.UserData> & {
  isSignedIn: boolean;
  isAdmin: boolean;
};

export type UserData = {
  username: string;
  discordname: string;
  avatar: string;
  id: string;
  fetchedAt: Date;
  authLevel: i.AUTH_LEVEL;
  dkp: number;
}

export type DatabaseUserData = {
  id: string;
  username: string;
  avatar: string;
  authLevel: number;
  dkp: number;
  createdAt: Date;
  updatedAt: Date;
}

export type FetchUser = i.BaseThunkAction<() => Promise<i.UserData | void>>;
