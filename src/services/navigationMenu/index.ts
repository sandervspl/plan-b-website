import { routeNames } from 'server/routeNames';

const navigationMenu = [
  {
    label: 'News',
    page: routeNames.home,
    external: false,
    disabled: false,
  },
  {
    label: 'About us',
    page: routeNames.about,
    external: false,
    disabled: false,
  },
  // {
  //   label: 'Photo gallery',
  //   page: routeNames.gallery,
  //   disabled: !__DEV__,
  // },
] as const;

export { navigationMenu };
