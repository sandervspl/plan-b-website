import * as i from 'types';
import { PAGE_ID } from './pages';

export type PageState = {
  data: PageData;
  error: boolean;
  loading: boolean;
};

export type PageData = {
  id: number;
  title: string;
  header_title: string;
  created_at: Date;
  updated_at: Date;
  posts: Post[];
};

export type FetchPageAction = (id: PAGE_ID) => i.ThunkAction;

export interface Post {
  id: number;
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
}
