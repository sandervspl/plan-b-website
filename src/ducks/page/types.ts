import * as i from 'types';

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
  header_image: i.Image;
}

export type LoginPageData = BasePageData & {
  title: string;
  content: string;
  disclaimer?: string;
}

export type NewsDetailPageData = BasePageData & i.Post & {
  relatedNews: i.Post[];
};


// Misc types
export type PagesBody = i.HomePageData | i.AboutPageData | i.LoginPageData | i.NewsDetailPageData;

export type ApiDataPayloads = {
  home?: i.HomePageData;
  about?: i.AboutPageData;
  login?: i.LoginPageData;
  post?: i.NewsDetailPageData;
}

export type PageKeys = keyof i.ApiDataPayloads;

export type PageMeta = i.BaseResponseBody & {
  title: string;
  description: string;
  image?: i.Image;
}
