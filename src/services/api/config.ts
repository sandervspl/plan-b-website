import config from 'config';

export default {
  /**
   * API base url
   * @see generateOptions.js
   */
  apiUrl: (() => {
    switch (config.env.toLowerCase()) {
      case 'production':
      default:
        return 'http://localhost:1337/';
    };
  })(),

  /**
   * Login path of the app
   * Used to redirect for unauthorized calls
   * @see redirectToLogin.js
   */
  loginPath: '/login',

  /**
   * If the app isn't depended on authorization put this to false
   * If this is turned off it won't use x-access-token in localStorage
   * @see generateOptions.js
   */
  defaultWithAuth: false,

  /**
   * Trigger general error message for api failures
   * @param {string} message - generated error message
   *
   * Enter null to disable general error messages
   * @see errorMessages.js
   */
  errorMessageFunction: (message: string) => {
    console.error('API failed', message);
  },
};
