import errorMessages from './errorMessages';
import config from './config';
import { TriggerErrorMessage } from './types';

export const triggerErrorMessage: TriggerErrorMessage = (errorConfig, apiError) => {
  if (errorConfig.hide === true && typeof config.errorMessageFunction !== 'function') return;

  let message = errorMessages.default;
  if (errorConfig && errorConfig.message) {
    message = errorConfig.message;
  } else if (apiError.reason && errorMessages[apiError.reason]) {
    message = errorMessages[apiError.reason];
  }

  config.errorMessageFunction(message);
};
