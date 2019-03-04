import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Store } from 'redux';
import { Provider } from 'react-redux';

// import registerServiceWorker from 'services/registerServiceWorker';
import { withReduxStore } from 'services';
import { theme, GlobalStyle } from 'src/styles';

class MyApp extends App<MyAppProps> {
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
              <Component {...pageProps} />
            </Provider>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

type MyAppProps = {
  reduxStore: Store;
}

export default withReduxStore(MyApp);
