import * as i from 'types';
import React, { useEffect } from 'react';
import { api, API_ENDPOINT } from 'services';
import { useRouter, useSelector } from 'hooks';
import { Paragraph, GlitchLogo, Link } from 'common';
import Page from 'modules/Page';
import { LoginContainer, Heading, Button, DiscordLogo } from 'modules/Login/styled';

const Login: i.NextPageComponent = () => {
  const router = useRouter();
  const user = useSelector((state) => state.user.data);

  useEffect(() => {
    // Redirect if we already have user data
    if (user) router.push('/');
  }, []);

  const handleOnClick = () => {
    window.location.href = `${api.url.api}/${API_ENDPOINT.AUTH}`;
  };

  return (
    <Page withoutNav>
      <LoginContainer>
        {!user && (
          <>
            <Link to="home">
              <GlitchLogo />
            </Link>
            <Heading>Sign in</Heading>
            <Paragraph>
              Sign in to see your DKP, visit the forums, or upload that awesome screenshot you just took.
            </Paragraph>
            <Button onClick={handleOnClick}>
              <DiscordLogo />
              Sign in with Discord
            </Button>
            <small>* You will have to be a member of the guild before you can sign in.</small>
          </>
        )}
      </LoginContainer>
    </Page>
  );
};

export default Login;
