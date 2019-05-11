import Routes from 'next-routes';

const router = new Routes()
  .add({ pattern: '/', page: 'home', name: 'home' })
  .add({ pattern: '/apply/:questionId?', page: 'apply', name: 'apply' })
  .add({ pattern: '/about', page: 'about', name: 'about' })
  .add({ pattern: '/login', page: 'login', name: 'login' });

// @ts-ignore
router.push = router.Router.pushRoute;

export default router;
