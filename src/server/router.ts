import * as i from 'types';
import Routes from 'next-routes';
import { routeNames } from './routeNames';

const router = (new Routes() as i.Router)
  .add({ pattern: '/', page: 'home', name: routeNames.home })
  .add({ pattern: '/apply/:questionId?', page: 'apply', name: routeNames.apply })
  .add({ pattern: '/about', page: 'about', name: routeNames.about })
  .add({ pattern: '/login', page: 'login', name: routeNames.login })
  .add({ pattern: '/news', page: 'news', name: routeNames.news })
  .add({ pattern: '/news/:id', page: 'news/detail', name: routeNames.newsDetail });

router.push = router.Router.pushRoute;

export default router;