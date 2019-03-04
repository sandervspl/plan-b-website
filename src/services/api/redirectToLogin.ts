import config from './config';

export default () => {
  localStorage.removeItem('x-access-token');
  // @ts-ignore Passing a string to location is fine
  window.location = config.loginPath;
};
