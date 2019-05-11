class NavigationMenu {
  private readonly _items = [
    {
      label: 'News',
      page: 'home',
    },
    {
      label: 'Join the guild',
      page: 'apply',
    },
    {
      label: 'About us',
      page: 'about',
    },
    {
      label: 'forums',
      page: 'http://forums.planbguild.eu/',
      external: true,
      invisible: !__DEV__,
    },
  ];

  get items() {
    // "typeof this._items" resolves into an error
    const tempItems = this._items;

    const items = tempItems
      .filter((item) => !item.invisible)
      .reduce((items, item) => {
        item.label = item.label.replace(/ /g, '.');

        return [...items, item];
      }, [] as typeof tempItems);

    return items;
  }
}

const navigationMenu = new NavigationMenu();

export { navigationMenu };
