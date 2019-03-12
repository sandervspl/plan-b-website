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
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

export default Hamburger;
