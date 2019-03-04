import Routes from 'next-routes';

const router = new Routes()
  .add({ pattern: '/', page: 'home', name: 'home' });

// @ts-ignore
router.push = router.Router.pushRoute;

export default router;
