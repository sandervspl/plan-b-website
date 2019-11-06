import * as i from 'types';

export enum AUTH_LEVEL {
  USER,
  OFFICER,
  GUILD_MASTER
}

export type UserState = i.BaseState<i.UserData> & {
  isSignedIn: boolean;
  isAdmin: boolean;
  character?: i.UserCharacterData;
  loadingCharacter: boolean;
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

export type UserCharacterData = i.BaseDatabaseBody & {
  name: string;
  dkp: number;
  dkpHistories?: DkpHistory[];
}

export type DkpHistory = i.BaseDatabaseBody & {
  net: number;
  spent: number;
  total: number;
  hours: number;
  event: i.DkpEvent;
}

export type DkpEvent = i.BaseDatabaseBody & {
  exporter: string;
  name: string;
  time: number;
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
  authLevel: i.AUTH_LEVEL;
}

export type FetchUser = i.BaseThunkAction<() => Promise<i.UserData | void>>;
export type FetchUserCharacter = i.BaseThunkAction<() => Promise<i.UserCharacterData | void>>;
