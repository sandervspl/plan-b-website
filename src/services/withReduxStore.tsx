/* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
import React from 'react';
import initializeStore from 'store';
import { NextAppContext, AppComponentProps as IAppComponentProps } from 'next/app';
import { Store } from 'redux';
import { isServer } from './isServer';

type AppComponentProps = IAppComponentProps & {
  initialReduxState: any;
}

const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState?: any): Store {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

export const withReduxStore = (App: any) => (
  class AppWithRedux extends React.Component<AppComponentProps> {
    reduxStore: Store;

    // eslint-disable-next-line react/sort-comp
    static async getInitialProps(appContext: NextAppContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore();

      // @ts-ignore Provide the store to getInitialProps of pages
      appContext.ctx.store = reduxStore;

      let appProps = {};
      if (typeof App.getInitialProps === 'function') {
        appProps = await App.getInitialProps.call(App, appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props: AppComponentProps) {
      super(props);

      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <App {...this.props} reduxStore={this.reduxStore} />;
    }
  }
);
