import * as i from 'types';
import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
// import registerServiceWorker from 'services/registerServiceWorker';
import { withReduxStore } from 'services';
import { theme, GlobalStyle } from 'styles';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';

class MyApp extends App<MyAppProps, MyAppState> {
  componentDidMount() {
    // registerServiceWorker();
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <Provider store={reduxStore}>
              <PageTransition timeout={TRANSITION_TIME_MS} classNames="page">
                <Component {...pageProps} key={this.props.router.route} />
              </PageTransition>
            </Provider>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

type MyAppProps = {
  reduxStore: i.Store;
}

type MyAppState = {
  curRoute: string;
}

export default withReduxStore(MyApp);
