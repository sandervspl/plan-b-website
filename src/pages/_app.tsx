import * as i from 'types';
import React from 'react';
import App, { Container, DefaultAppIProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { fetchUser } from 'ducks/user';
import { withReduxStore } from 'services';
import { RouterContextProvider } from 'hooks';
import { theme, GlobalStyle } from 'styles';

class MyApp extends App<Props> {
  componentDidMount() {
    this.props.reduxStore.dispatch(fetchUser());
  }

  render() {
    const { Component, pageProps, reduxStore, router } = this.props;

    return (
      <Container>
        <RouterContextProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <>
              <Provider store={reduxStore}>
                <Component {...pageProps} key={router.route} />
              </Provider>
            </>
          </ThemeProvider>
        </RouterContextProvider>
      </Container>
    );
  }
}

type Props = DefaultAppIProps & AppProps & {
  reduxStore: i.Store;
}

export default withReduxStore(MyApp);
