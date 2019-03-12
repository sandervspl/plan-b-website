import React from 'react';
import { NavContainer } from './styled';
import { NavLink } from 'common';

const Navigation: React.FC<Props> = (props) => (
  <NavContainer>
    <NavLink to="apply">join.the.guild</NavLink>
    <NavLink to="about">about.us</NavLink>
  </NavContainer>
);

export type Props = {

};

export default Navigation;
