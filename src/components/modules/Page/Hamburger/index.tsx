import React from 'react';
import { HamburgerContainer } from './styled';

const Hamburger: React.FC<props> = (props) => (
  <HamburgerContainer {...props}>
    <span />
    <span />
    <span />
  </HamburgerContainer>
);

export type props = {
  active: boolean;
};

export default Hamburger;
