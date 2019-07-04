import * as i from 'types';
import React from 'react';
import App, { Container, DefaultAppIProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { withReduxStore } from 'services';
import { theme, GlobalStyle } from 'styles';
import { RouterContextProvider } from 'hooks';

class MyApp extends App<Props> {
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
