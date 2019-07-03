import { routeNames } from 'server/routeNames';
import { NavigationItem } from './types';

const navigationMenu: readonly NavigationItem[] = [
  {
    label: 'News',
    page: routeNames.home,
  },
  {
    label: 'About us',
    page: routeNames.about,
    disabled: !__DEV__,
  },
  {
    label: 'Photo gallery',
    page: routeNames.photos,
    disabled: !__DEV__,
  },
];

export { navigationMenu };
