import * as i from 'types';
import { API_ENDPOINT } from 'services/api/endpoints';

export type PageState<T> = i.BaseState<T>;

export type HomePageData = i.BaseResponseBody & {
  hero_title?: string;
  hero_server?: string;
  hero_video?: string;
  posts?: Post[];
};

export type FetchPageAction = (endpoint: API_ENDPOINT) => i.ThunkAction;

export type Post = i.BaseResponseBody & {
  title?: string;
  content?: string;
  published: boolean;
};

export type AboutPageData = i.BaseResponseBody & {
  title?: string;
  content?: string;
}
