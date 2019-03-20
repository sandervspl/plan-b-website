import * as i from 'types';
import React from 'react';
import App, { Container, DefaultAppIProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
// import registerServiceWorker from 'services/registerServiceWorker';
import { withReduxStore } from 'services';
import { theme, GlobalStyle } from 'styles';
import { TRANSITION_TIME_MS, TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';

class MyApp extends App<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      curRoute: '/',
      transitionTime: props.router.route === '/home'
        ? TRANSITION_TIME_MS
        : TRANSITION_TIME_MS_SHORT,
    };
  }

  componentDidMount() {
    // registerServiceWorker();
  }

  componentDidUpdate() {
    const { curRoute } = this.state;
    const { route } = this.props.router;

    if (route !== curRoute) {
      const transitionTime = route === '/home' || curRoute === '/home'
        ? TRANSITION_TIME_MS
        : TRANSITION_TIME_MS_SHORT;

      this.setState({
        curRoute: route,
        transitionTime,
      });
    }
  }

  render() {
    const { transitionTime } = this.state;
    const { Component, pageProps, reduxStore, router } = this.props;

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Container>
            <Provider store={reduxStore}>
              <PageTransition timeout={transitionTime} classNames="page">
                <Component {...pageProps} key={router.route} />
              </PageTransition>
            </Provider>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

type Props = DefaultAppIProps & AppProps & {
  reduxStore: i.Store;
}

type State = {
  curRoute: string;
  transitionTime: number;
}

export default withReduxStore(MyApp);
