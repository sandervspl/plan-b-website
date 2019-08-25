import * as i from 'types';

export type TwitchState = i.BaseState<i.ActiveStreams>;

export type ActiveStream = {
  stream: {
    id: string;
    user_name: string;
    game_id: string;
    type: 'live';
    title: string;
    viewer_count: number;
    started_at: Date;
    thumbnail_url: string;
  };
  user: {
    id: string;
    display_name: string;
    login: string;
    profile_image_url: string;
  };
};

export type ActiveStreams = i.ActiveStream[];

export type FetchActiveStreams = i.BaseThunkAction<() => Promise<i.ActiveStreams | void>>;
