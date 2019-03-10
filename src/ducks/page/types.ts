import * as i from 'types';
import { PAGE_ENDPOINT } from './pages';

export type PageState = {
  data: PageData;
  error: boolean;
  loading: boolean;
};

export type PageData = {
  id: number;
  hero_title: string;
  hero_server: string;
  hero_video: string;
  posts: Post[];
  created_at: Date;
  updated_at: Date;
};

export type FetchPageAction = (endpoint: PAGE_ENDPOINT) => i.ThunkAction;

export type Post = {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  status: 'draft' | 'publish';
};
