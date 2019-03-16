import 'isomorphic-fetch';
// import redirectToLogin from './redirectToLogin';
import { triggerErrorMessage } from './triggerErrorMessage';
import { handleStatusCodes } from './handleStatusCodes';
import { Request } from './types';
// import { isServer } from 'services/isServer';

export const request: Request = ({
  path, options, file, errorConfig = {},
}) => new Promise((resolve, reject) => {
  // if (!isServer && !localStorage.getItem('x-access-token')) return redirectToLogin();

  fetch(path, options)
    .then((response) => {
      if (handleStatusCodes(response.status)) return;

      if (response.ok) {
        if (file) return response.blob();
        return response.json();
      }

      return Promise.reject(response.json());
    })
    .then((json) => { resolve(json); })
    .catch((json) => {
      try {
        json.then((err) => {
          triggerErrorMessage(errorConfig, err);
          reject(err);
        }).catch();
      } catch (err) {
        triggerErrorMessage(errorConfig, json);
        reject(json);
      }
    });
});
