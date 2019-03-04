import Router from 'router';

export const getPageFromRoute = (routeName: string) => {
  let name = routeName;

  if (name.charAt(0) === '/') name = name.slice(1);

  // @ts-ignore routes exists
  const route = Router.routes.find((route: string) => route.name === name);

  return route ? route.page : null;
};
