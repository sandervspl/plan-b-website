import * as i from 'types';
import { PAGE_ID } from './pages';

export type PageState = {
  data: PageData;
  error: boolean;
  loading: boolean;
};

export type PageData = {};

export type FetchPageAction = (id: PAGE_ID) => i.ThunkAction;
