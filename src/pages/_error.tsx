import * as i from 'types';
import React from 'react';
import { getUrl } from 'services';
import { ErrorContainer } from 'modules/Error/styled';
import { Heading, GlitchBullLogo, Link, Paragraph } from 'common';

const ErrorPage: i.NextPageComponent<Props> = ({ statusCode }) => {
  const text = statusCode === 404
    ? 'This page does not exist'
    : 'Oops, something went wrong';

  return (
    <ErrorContainer>
      <div>
        <Heading as="h1">{text}</Heading>
        <Heading as="h3">{statusCode}</Heading>

        <Link to="login">
          <Paragraph>Sign in</Paragraph>
        </Link>
      </div>

      <GlitchBullLogo />
    </ErrorContainer>
  );
};

ErrorPage.getInitialProps = async ({ req, res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : undefined;

  return {
    url: getUrl(req),
    statusCode: statusCode ? Number(statusCode) : 500,
  };
};

export type Props = {
  statusCode?: number;
};

export default ErrorPage;
