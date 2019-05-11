import * as i from 'types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from 'ducks/user';
import Page from 'modules/Page';
import { api, API_ENDPOINT } from 'services';
import { useRouter } from 'services/hooks';
import { Paragraph } from 'common';

const Login: i.NextPageComponent<Props> = (props) => {
  const router = useRouter();
  const isLoggingIn = !!(router.query && router.query.auth);

  useEffect(() => {
    if (!isLoggingIn) return;

    // Get user data
    props.fetchUser()
      .then((user: i.UserData) => {
        // Save credentials so we know user is logged in
        if (user) {
          localStorage.setItem('user_id', user.id);
          localStorage.setItem('user_fetched_at', user.fetchedAt.toString());
        }
      });

    /** @todo set user data in Redux */
  }, []);

  const handleOnClick = () => {
    window.location.href = `${api.url.api}/${API_ENDPOINT.AUTH}`;
  };

  return (
    <Page>
      {isLoggingIn ? (
        <Paragraph>Signing in...</Paragraph>
      ) : (
        <button onClick={handleOnClick}>Sign in with Discord</button>
      )}
    </Page>
  );
};

type Props = {
  fetchUser: i.FetchUserDuck;
}

// @ts-ignore
export default connect(null, { fetchUser })(Login);
