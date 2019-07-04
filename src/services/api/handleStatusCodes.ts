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
      return false;
    default:
      return false;
  }
};
