import React from 'react';
import { LinkTextFill } from 'common';
import { navigationMenu } from 'services';
import { NavContainer, NavList } from './styled';

const Navigation: React.FC = () => (
  <NavContainer>
    <NavList>
      {navigationMenu.items.map((item, i) => (
        <li key={i}>
          <LinkTextFill component={item.external ? 'a' : 'NavLink'} to={item.page}>
            {item.label}
          </LinkTextFill>
        </li>
      ))}
    </NavList>
  </NavContainer>
);

export default Navigation;
