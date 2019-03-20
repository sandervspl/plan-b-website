import * as i from 'types';
import { API_ENDPOINT } from 'services';

export type PageKeys = keyof ApiDataPayloads | 'data';

export type PageState = i.BaseState & {
  home?: i.HomePageData;
  about?: i.AboutPageData;
};

type HomePageBody = {
  hero_title?: string;
  hero_server?: string;
  hero_video?: string;
  posts?: i.Post[];
}
export type HomePageData = i.BaseResponseBody & HomePageBody;

type AboutPageBody = {
  title?: string;
  content?: string;
  hero_image?: i.Image;
};
export type AboutPageData = i.BaseResponseBody & AboutPageBody;

export type PagesBody = HomePageBody | AboutPageBody;

export type ApiDataPayloads = {
  home?: i.HomePageData;
  about?: i.AboutPageData;
};

export type Post = i.BaseResponseBody & {
  title?: string;
  content?: string;
  published: boolean;
};

export type FetchPageAction = (endpoint: API_ENDPOINT) => i.ThunkAction;
export type GeneratePayload = (endpoint: API_ENDPOINT, payload: i.PagesBody) => i.ApiDataPayloads;
