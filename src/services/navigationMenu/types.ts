import * as i from 'types';

type BaseNavItem = {
  label: string;
  invisible?: boolean;
}

type ExternalNavItem = BaseNavItem & {
  external: true;
  page: string;
}

type InternalNavItem = BaseNavItem & {
  external?: false;
  page: i.RouteNames;
}

export type NavigationItem = InternalNavItem | ExternalNavItem;
