import * as i from 'types';
import { PAGE_ID } from './pages';

export type PageState = {
  data: PageData;
  error: boolean;
  loading: boolean;
};

export type PageData = {
  id: number;
  date: Date;
  date_gmt: Date;
  guid: {
    rendered: string;
  };
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  parent: number;
  menu_order: number;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: any[];
  _links: Links;
};

export type FetchPageAction = (id: PAGE_ID) => i.ThunkAction;

export interface Links {
  self: {
    href: string;
  }[];
  collection: {
    href: string;
  }[];
  about: {
    href: string;
  }[];
  author: {
    embeddable: boolean;
    href: string;
  }[];
  replies: {
    embeddable: boolean;
    href: string;
  }[];
  'version-history': {
    count: number;
    href: string;
  }[];
  'predecessor-version': {
    id: number;
    href: string;
  }[];
  'wp:attachment': {
    href: string;
  }[];
  curies: {
    name: string;
    href: string;
    templated: boolean;
  }[];
}