import * as i from 'types';
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { fetchUser } from 'ducks/user';
import Router from 'router';
import { api, API_ENDPOINT } from 'services';
import { useRouter } from 'services/hooks';
import { Paragraph } from 'common';
import { LoginContainer } from 'modules/Login/styled';

const Login: i.NextPageComponent<Props> = (props) => {
  const router = useRouter();
  const user = useSelector((state: i.ReduxState) => state.user.data);
  const isLoggingIn = !!(router.query && router.query.auth);

  useEffect(() => {
    if (!isLoggingIn) return;

    // Redirect if we already have user data
    if (user) (Router as i.Router).push('home');

    // Get user data
    props.fetchUser()
      .then(() => {
        (Router as i.Router).push('home');
      });
  }, []);

  const handleOnClick = () => {
    window.location.href = `${api.url.api}/${API_ENDPOINT.AUTH}`;
  };

  return (
    <LoginContainer>
      {isLoggingIn || user ? (
        <Paragraph>Signing in...</Paragraph>
      ) : (
        <button onClick={handleOnClick}>Sign in with Discord</button>
      )}
    </LoginContainer>
  );
};

type Props = {
  fetchUser: i.FetchUser;
}

// @ts-ignore
export default connect(null, { fetchUser })(Login);
