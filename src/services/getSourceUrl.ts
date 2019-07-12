import apiConfig from './api/config';

export const getCmsUrl = (url: string) => (
  `${apiConfig.url.cms}/${(url || '').slice(1)}`
);
