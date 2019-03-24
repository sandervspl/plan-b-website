import apiConfig from './api/config';

export const getSourceUrl = (url: string) => (
  `${apiConfig.url.cms}/${url.slice(1)}`
);
