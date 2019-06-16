export { WithRouterProps, SingletonRouter } from 'next/router';

export type ValueOf<T> = T[keyof T];

export type VisibilityProps = {
  isVisible: boolean;
}

export type HexCode = string;

const routeNames = {
  home: 'home' as const,
  apply: 'apply' as const,
  about: 'about' as const,
  login: 'login' as const,
  news: 'news' as const,
  newsDetail: 'news-detail' as const,
};

export type RouteNames = ValueOf<typeof routeNames>;
