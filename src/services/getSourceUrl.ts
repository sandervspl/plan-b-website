import apiConfig from './api/config';

export const getSourceUrl = (url: string) => (
  apiConfig.apiUrl + url.slice(1)
);
