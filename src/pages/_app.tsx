import 'services/fontAwesomeInit';
import * as i from 'types';
import React from 'react';
import App, { Container, DefaultAppIProps, AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import MobileDetect from 'mobile-detect';
import _ from 'lodash/fp';
import { fetchUser } from 'ducks/user';
import { actions as uiActions } from 'ducks/ui';
import { RouterContextProvider } from 'hooks';
import { withReduxStore, isServer } from 'services';
import { theme, GlobalStyle } from 'styles';
import { CookieBar, FullscreenLoader } from 'common';

class MyApp extends App<Props> {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    // Fire component's props first
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Check if request is from mobile phone
    const md = ctx.req
      ? new MobileDetect(ctx.req.headers['user-agent'] || '')
      : new MobileDetect(navigator.userAgent);

    ctx.store.dispatch(uiActions.setIsMobile(!!md.mobile()));

    // Fetch user on server only
    // if (ctx.req) {
    //   await ctx.store.dispatch(fetchUser(
    //     ctx.req.headers.cookie!
    //   ));
    // }

    return { pageProps };
  }

  componentDidMount() {
    this.props.reduxStore.dispatch(fetchUser());

    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = _.debounce(1000)(() => {
    if (isServer) return;

    this.props.reduxStore.dispatch(uiActions.setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    }));
  });

  render() {
    const { Component, pageProps, reduxStore, router } = this.props;

    return (
      <Container>
        <RouterContextProvider>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <>
              <CookieBar />
              <FullscreenLoader />
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
