import config from 'config';

const apiConfig = {
  url: {
    cms: (() => {
      switch (config.appEnv.toLowerCase()) {
        case 'test':
        case 'acceptation':
        case 'production':
        default:
          return 'http://cms.planbguild.eu';
      };
    })(),

    api: (() => {
      switch (config.appEnv.toLowerCase()) {
        case 'test':
        case 'acceptation':
        case 'production':
          return 'http://api.planbguild.eu';
        default:
          return 'http://localhost:8080';
      };
    })(),
  },

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

export default apiConfig;
