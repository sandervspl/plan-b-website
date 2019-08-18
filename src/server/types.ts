import * as i from 'types';
import { Registry, RouteParams } from 'next-routes';
import { EventChangeOptions } from 'next/router';
import { routeNames } from 'server/routeNames';

export type Router = Registry & {
  push(
    route: string,
    params?: RouteParams,
    options?: EventChangeOptions
  ): Promise<boolean>;
  routes: {
    name: string;
    page: string;
  }[];
}

export type RouteNames = i.ValueOf<typeof routeNames>;
