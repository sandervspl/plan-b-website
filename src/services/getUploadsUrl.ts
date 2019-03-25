import apiConfig from './api/config';

export const getUploadsUrl = (url: string) => (
  `${apiConfig.url.cms}/uploads/${url}`
);
