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

  firebase: {
    apiKey: 'AIzaSyAT0BnUlJ7Zo9TTlMGHA_4eR_-UQVTGcLA',
    authDomain: 'plan-b-website-fd627.firebaseapp.com',
    databaseURL: 'https://plan-b-website-fd627.firebaseio.com',
    projectId: 'plan-b-website-fd627',
    storageBucket: 'plan-b-website-fd627.appspot.com',
    messagingSenderId: '919064356870',
    appId: '1:919064356870:web:27e46691f528ce91',
  },
};

export default config;
