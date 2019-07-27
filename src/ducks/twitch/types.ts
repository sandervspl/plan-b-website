import * as i from 'types';

export type TwitchState = i.BaseState<i.ActiveStreams>;

export type ActiveStreamData = {
  id: string;
  user_name: string;
  game_id: string;
  type: 'live';
  title: string;
  viewer_count: number;
  started_at: Date;
  thumbnail_url: string;
};

export type ActiveStreams = i.ActiveStreamData[];

export type fetchActiveStreams = i.BaseThunkAction<() => Promise<i.ActiveStreams | void>>;
