class NavigationMenu {
  private _items = [
    {
      label: 'Join the guild',
      page: 'apply',
    },
    {
      label: 'About us',
      page: 'about',
    },
  ];

  get items() {
    // "typeof this._items" resolves into an error
    const tempItems = this._items;

    const items = tempItems.reduce((items, item) => {
      item.label = item.label.replace(/ /g, '.');

      return [...items, item];
    }, [] as typeof tempItems);

    return items;
  }
}

const navigationMenu = new NavigationMenu();

export { navigationMenu };