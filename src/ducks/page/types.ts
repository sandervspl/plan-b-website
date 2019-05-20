import * as i from 'types';
import { API_ENDPOINT } from 'services';

// Duck state
export type PageState = i.Omit<i.BaseState, 'data'> & i.ApiDataPayloads;


// Page bodies
export type HomePageData = i.BaseResponseBody & {
  hero_title?: string;
  posts?: i.BasePost[];
  meta?: i.PageMeta;
}

export type AboutPageData = i.BaseResponseBody & {
  title?: string;
  content?: string;
  hero_image?: i.Image;
}

export type ApplicationPageData = i.BaseResponseBody & {
  intro_title: string;
  intro_text: string;
  intro_image?: i.Image;
  recruitmentquestions: i.RecruitmentQuestion[];
}


// Misc types
export type PagesBody = i.HomePageData | i.AboutPageData | i.ApplicationPageData;

export type PageKeys = keyof i.ApiDataPayloads;

export type ApiDataPayloads = {
  home?: i.HomePageData;
  about?: i.AboutPageData;
  application?: i.ApplicationPageData;
}

export type RecruitmentQuestion = {
  id: number;
  question: string;
  description?: string;
  answer_type: i.AnswerType;
  created_at: Date;
  updated_at: Date;
  list_of_answers?: string;
  recruitmentpage: number;
}

export type AnswerType = 'text' | 'long_text' | 'armory_select' | 'list_select';

export type RecruitmentQuestionDetail = RecruitmentQuestion & {
  recruitmentpage: i.BaseResponseBody & {
    intro_text: string;
    intro_title: string;
  };
  background_image?: i.Image;
}

export type PageMeta = i.BaseResponseBody & {
  aboutpage?: number; // Page ID
  homepage?: number;  // Page ID
  title?: string;
  description?: string;
  image?: i.Image;
}


// Methods
export type FetchPageAction = (endpoint: API_ENDPOINT) => i.ThunkAction;

export type GeneratePayload = (endpoint: API_ENDPOINT, payload: i.PagesBody) => i.ApiDataPayloads;
