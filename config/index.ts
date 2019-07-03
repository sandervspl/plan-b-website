const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  appEnv: process.env.APP_ENV || 'development',

  domain: () => {
    switch (process.env.APP_ENV || 'development') {
      case 'test':
        return 'https://dev.planbguild.eu';
      case 'acceptation':
        return 'https://acc.planbguild.eu';
      case 'production':
        return 'https://planbguild.eu';
      default:
        return 'http://localhost:3000';
    }
  },
};

export default config;
