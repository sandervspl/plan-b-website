import * as i from 'types';
import React from 'react';
import App, { Container, DefaultAppIProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PageTransition } from 'next-page-transitions';
import _ from 'lodash/fp';
// import registerServiceWorker from 'services/registerServiceWorker';
import { withReduxStore, isServer } from 'services';
import { theme, GlobalStyle, sizes } from 'styles';
import { TRANSITION_TIME_MS, TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';
import { RouterContextProvider } from 'hooks';

class MyApp extends App<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      curRoute: '/',
      // transitionTime: props.router.route === '/home'
      //   ? TRANSITION_TIME_MS
      //   : TRANSITION_TIME_MS_SHORT,
      transitionTime: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentDidUpdate() {
    const { curRoute } = this.state;
    const { route } = this.props.router;

    if (!this.isMobile() && route !== curRoute) {
      const transitionTime = route === '/home' || curRoute === '/home'
        ? TRANSITION_TIME_MS
        : TRANSITION_TIME_MS_SHORT;

      this.setState({
        curRoute: route,
        transitionTime,
      });
    }
  }

  isMobile = () => window.innerWidth <= sizes.tablet;

  handleResize = _.debounce(1000)(() => {
    if (isServer) return;

    const { curRoute } = this.state;
    let newTransitionTime = this.state.transitionTime;

    if (this.isMobile()) {
      newTransitionTime = 0;
    } else {
      newTransitionTime = curRoute === '/home'
        ? TRANSITION_TIME_MS
        : TRANSITION_TIME_MS_SHORT;
    }

    if (newTransitionTime !== this.state.transitionTime) {
      this.setState({
        transitionTime: newTransitionTime,
      });
    }
  });

  render() {
    const { transitionTime } = this.state;
    const { Component, pageProps, reduxStore, router } = this.props;

    return (
      <Container>
        <RouterContextProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <>
              <Provider store={reduxStore}>
                {/* <PageTransition timeout={transitionTime} classNames="page"> */}
                <Component {...pageProps} key={router.route} />
                {/* </PageTransition> */}
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

type State = {
  curRoute: string;
  transitionTime: number;
}

export default withReduxStore(MyApp);
