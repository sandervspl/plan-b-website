import * as i from 'types';

type BaseNavItem = {
  label: string;
  disabled?: boolean;
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
