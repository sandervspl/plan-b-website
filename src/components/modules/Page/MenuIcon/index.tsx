import React from 'react';
import { VeganBurgerContainer } from './styled';

const MenuIcon: React.FC<props> = (props) => (
  <VeganBurgerContainer {...props}>
    <span />
    <span />
    <span />
  </VeganBurgerContainer>
);

export type props = {
  active: boolean;
};

export default MenuIcon;
