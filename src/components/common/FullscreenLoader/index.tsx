import React from 'react';
import Router from 'next/router';
import { isServer } from 'services';
import { LoadingContainer, BullLogo } from './styled';

export class FullscreenLoader extends React.Component {
  state = {
    loading: false,
  }

  timeoutId = -1;

  componentDidMount() {
    Router.onRouteChangeStart = (route) => {
      this.setState({ loading: true });

      // Amazing fix to routes getting stuck on transition. Especially '/'
      this.timeoutId = setTimeout(() => {
        if (!isServer && this.state.loading) {
          window.location.href = route;
        }
      }, 2000);
    };

    Router.onRouteChangeComplete = () => {
      this.setState({
        loading: false,
      });

      clearTimeout(this.timeoutId);
    };
  }

  render() {
    const { loading } = this.state;

    return (
      <LoadingContainer active={loading}>
        <BullLogo />
      </LoadingContainer>
    );
  }
}
