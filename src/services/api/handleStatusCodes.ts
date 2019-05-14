import { LOCALSTORAGE } from 'services/constants';
import { HandleStatusCodes } from './types';

/**
 * Handle api status codes
 * Return true to exit the request
 */
export const handleStatusCodes: HandleStatusCodes = (code) => {
  switch (code) {
    case 204:
      return true;
    case 401:
      localStorage.removeItem(LOCALSTORAGE.USER_ID);
      localStorage.removeItem(LOCALSTORAGE.USER_FETCHED_AT);
      return false;
    default:
      return false;
  }
};
