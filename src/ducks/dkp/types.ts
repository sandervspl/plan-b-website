import * as i from 'types';

export type DkpState = i.BaseState & {
  average: i.GuildDkpAvgResponse;
};

export type GuildDkpAvgResponse = Record<string, {
  value: number;
  date: Date;
}>;

export type SendDkpXml = i.BaseThunkAction<(file: File, eventName: string) => Promise<void>>;
export type GetGuildAverageDkp = i.BaseThunkAction<() => Promise<i.GuildDkpAvgResponse | void>>;
