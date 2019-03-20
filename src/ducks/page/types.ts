import * as i from 'types';
import { API_ENDPOINT } from 'services';

// Duck state
export type PageState = i.Omit<i.BaseState, 'data'> & i.ApiDataPayloads;


// Page bodies
export type HomePageData = i.BaseResponseBody & {
  hero_title?: string;
  hero_server?: string;
  hero_video?: string;
  posts?: i.Post[];
}

export type AboutPageData = i.BaseResponseBody & {
  title?: string;
  content?: string;
  hero_image?: i.Image;
}

export type ApplicationPageData = i.BaseResponseBody & {
  hero_image?: i.Image;
}


// Misc types
export type PagesBody = i.HomePageData | i.AboutPageData | i.ApplicationPageData;

export type PageKeys = keyof i.ApiDataPayloads;

export type ApiDataPayloads = {
  home?: i.HomePageData;
  about?: i.AboutPageData;
  application?: i.ApplicationPageData;
}

export type Post = i.BaseResponseBody & {
  title?: string;
  content?: string;
  published: boolean;
}


// Methods
export type FetchPageAction = (endpoint: API_ENDPOINT) => i.ThunkAction;

export type GeneratePayload = (endpoint: API_ENDPOINT, payload: i.PagesBody) => i.ApiDataPayloads;
