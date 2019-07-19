import * as i from 'types';

export enum AUTH_LEVEL {
  USER,
  OFFICER,
  GUILD_MASTER
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

export type FullDatabaseUserData = {
  id: string;
  username: string;
  avatar: string;
  authLevel: number;
  dkp: number;
  createdAt: Date;
  updatedAt: Date;
}

export type SimpleDatabaseUserData = {
  id: string;
  username: string;
  avatar: string;
}

export type FetchUser = i.BaseThunkAction<() => Promise<i.UserData | void>>;
