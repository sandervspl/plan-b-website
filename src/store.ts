import * as i from 'types';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as appReducers from 'ducks';
import { isServer, api } from 'services';

export default (initialState = {}) => {
  let middleware = applyMiddleware(thunk.withExtraArgument(api));
  // @ts-ignore payload is required bullshit
  const reducers = combineReducers<i.ReduxState>({ ...appReducers });

  if (
    !__PROD__
    && !isServer
    && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function'
  ) {
    middleware = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  return createStore<i.ReduxState, i.Action, {}, {}>(reducers, initialState, middleware);
};
