import * as i from 'types';

export type UserState = i.BaseState<i.UserData>;

export type UserData = {
  username: string;
  locale: string;
  mfa_enabled: boolean;
  flags: number;
  avatar: string;
  discriminator: string;
  id: string;
  provider: string;
  accessToken: string;
  fetchedAt: Date;
}

export type FetchUser<T = Promise<void>> = () => T;
export type FetchUserDuck = FetchUser<i.ThunkAction<Promise<void | i.UserData>>>;
