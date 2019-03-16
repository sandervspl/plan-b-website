import React from 'react';
import { NavLink } from 'common';
import { navigationMenu } from 'services';
import { NavContainer } from './styled';

const Navigation: React.FC = () => (
  <NavContainer>
    {navigationMenu.items.map((item, i) => (
      <NavLink key={i} to={item.page}>
        {item.label}
      </NavLink>
    ))}
  </NavContainer>
);

export default Navigation;
