import * as i from 'types';
import { API_ENDPOINT } from 'services';

// Duck state
export type PageState = Omit<i.BaseState, 'data'> & i.ApiDataPayloads & {
  meta?: i.PageMeta;
};


// Page bodies
export type BasePageData = i.BaseResponseBody & {
  meta?: i.PageMeta;
}

export type HomePageData = BasePageData & {
  posts: i.BasePost[];
}

export type AboutPageData = BasePageData & {
  title: string;
  content: string;
}

export type LoginPageData = BasePageData & {
  title: string;
  content: string;
  disclaimer?: string;
}


// Misc types
export type PagesBody = i.HomePageData | i.AboutPageData | i.LoginPageData;

export type PageKeys = keyof i.ApiDataPayloads;

export type ApiDataPayloads = {
  home?: i.HomePageData;
  about?: i.AboutPageData;
  login?: i.LoginPageData;
}

export type PageMeta = i.BaseResponseBody & {
  title: string;
  description: string;
  image?: i.Image;
}


// Methods
export type FetchPageAction = (endpoint: API_ENDPOINT) => i.ThunkAction;

export type GeneratePayload = (endpoint: API_ENDPOINT, payload: i.PagesBody) => i.ApiDataPayloads;
