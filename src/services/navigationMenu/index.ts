import { routeNames } from 'server/routeNames';
import { NavigationItem } from './types';

class NavigationMenu {
  private readonly _items: NavigationItem[] = [
    {
      label: 'News',
      page: routeNames.home,
    },
    {
      label: 'About us',
      page: routeNames.about,
    },
    {
      label: 'forum',
      page: 'http://forum.planbguild.eu/',
      external: true,
      invisible: !__DEV__,
    },
  ];

  get items() {
    return this._items.filter((item) => !item.invisible);
  }

  // eslint-disable-next-line @typescript-eslint/camelcase
  get __OLD__items() {
    // "typeof this._items" resolves into an error
    const tempItems = this._items;

    const items = this.items.reduce((items, item) => {
      item.label = item.label.replace(/ /g, '.');

      return [...items, item];
    }, [] as typeof tempItems);

    return items;
  }
}

const navigationMenu = new NavigationMenu();

export { navigationMenu };
