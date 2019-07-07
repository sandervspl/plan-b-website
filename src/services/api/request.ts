
import { Request } from './types';
import 'isomorphic-fetch';

import { triggerErrorMessage } from './triggerErrorMessage';
import { handleStatusCodes } from './handleStatusCodes';

export const request: Request = ({ path, options, file, withAuth, errorConfig = {} }) => (
  new Promise(async (resolve, reject) => {
    if (withAuth) {
      options.credentials = 'include';
    }

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
  })
);
