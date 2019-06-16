import Routes from 'next-routes';

export const routeNames = {
  home: 'home',
  apply: 'apply',
  about: 'about',
  login: 'login',
  news: 'news',
  newsDetail: 'news-detail',
};

const router = new Routes()
  .add({ pattern: '/', page: 'home', name: routeNames.home })
  .add({ pattern: '/apply/:questionId?', page: 'apply', name: routeNames.apply })
  .add({ pattern: '/about', page: 'about', name: routeNames.about })
  .add({ pattern: '/login', page: 'login', name: routeNames.login })
  .add({ pattern: '/news', page: 'news', name: routeNames.news })
  .add({ pattern: '/news/:id', page: 'news/detail', name: routeNames.newsDetail });

// @ts-ignore
router.push = router.Router.pushRoute;

export default router;
