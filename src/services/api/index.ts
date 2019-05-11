import ApiHelper from './api';
import * as middlewares from './middleware';

const apiHelper = new ApiHelper();

apiHelper.applyMiddleware(middlewares);

const api = apiHelper;

export { api };
