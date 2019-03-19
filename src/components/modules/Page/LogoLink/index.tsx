import React from 'react';
import { Link, Header } from 'common';
import { LogoLinkContainer } from './styled';

const LogoLink: React.FC<Props> = ({ className }) => (
  <LogoLinkContainer className={className}>
    <Link to="home">
      <Header as="h2">Plan B</Header>
    </Link>
  </LogoLinkContainer>
);

export type Props = {
  className?: string;
};

export default LogoLink;
