import config from './config';
import { isServer } from 'services';

export default () => {
  if (isServer()) return;

  localStorage.removeItem('x-access-token');
  // @ts-ignore Passing a string to location is fine
  window.location = config.loginPath;
};
