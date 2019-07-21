import config from 'config';

const apiConfig = {
  url: {
    cms: (() => {
      switch (config.appEnv.toLowerCase()) {
        case 'test':
          return 'https://cms-test.planbguild.eu';
        case 'acceptation':
          return 'https://cms-acc.planbguild.eu';
        case 'production':
          return 'https://cms.planbguild.eu';
        default:
          return 'http://cms-test.planbguild.eu';
      };
    })(),

    api: (() => {
      switch (config.appEnv.toLowerCase()) {
        case 'test':
          return 'https://api-test.planbguild.eu' as const;
        case 'acceptation':
          return 'https://api-acc.planbguild.eu' as const;
        case 'production':
          return 'https://api.planbguild.eu' as const;
        default:
          return 'http://localhost:8080' as const;
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
