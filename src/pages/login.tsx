import * as i from 'types';
import React, { useEffect } from 'react';
import { api, API_ENDPOINT, getUrl } from 'services';
import { useRouter, useSelector } from 'hooks';
import { Paragraph, GlitchLogo, Link } from 'common';
import Page from 'modules/Page';
import { LoginContainer, Heading, Button, DiscordLogo } from 'modules/Login/styled';
import { fetchPage } from 'ducks/page';

const Login: i.NextPageComponent = ({ url }) => {
  const router = useRouter();
  const user = useSelector((state) => state.user.data);
  const login = useSelector((state) => state.page.login);

  useEffect(() => {
    // Redirect if we already have user data
    if (user) router.push('/');
  }, []);

  const handleOnClick = () => {
    window.location.href = `${api.url.api}/${API_ENDPOINT.AUTH}`;
  };

  return (
    <Page withoutNav meta={login && login.meta} url={url}>
      <LoginContainer>
        {!user && login && (
          <>
            <Link to="home">
              <GlitchLogo />
            </Link>
            <Heading>{login.title}</Heading>
            <Paragraph>
              {login.content}
            </Paragraph>
            <Button onClick={handleOnClick}>
              <DiscordLogo />
              Sign in with Discord
            </Button>
            {login.disclaimer && <small>{login.disclaimer}</small>}
          </>
        )}
      </LoginContainer>
    </Page>
  );
};

Login.getInitialProps = async ({ req, store }) => {
  await store.dispatch(fetchPage(API_ENDPOINT.LOGIN));

  return {
    url: getUrl(req),
  };
};

export default Login;
