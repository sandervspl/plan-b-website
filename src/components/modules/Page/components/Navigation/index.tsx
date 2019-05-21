import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'common';
import { navigationMenu } from 'services';
import User from '../User';
import {
  HeaderContainer, UserContainer, NavContainer, SignIn, JoinGuildBanner, NavList, NavItem,
} from './styled';

const Navigation: React.FC<Props> = () => {
  const user = useSelector((state: i.ReduxState) => state.user);

  return (
    <HeaderContainer>
      <UserContainer>
        {user.isSignedIn ? (
          <User />
        ) : (
          <SignIn to="login">Sign in</SignIn>
        )}
        {!user.isSignedIn && (
          <Link to="apply">
            <JoinGuildBanner>Join the guild</JoinGuildBanner>
          </Link>
        )}
      </UserContainer>

      <NavContainer>
        <NavList>
          {navigationMenu.items.map((item, i) => (
            <NavItem key={i}>
              {item.external
                ? <Link to={item.page} external>{item.label}</Link>
                : <NavLink to={item.page}>{item.label}</NavLink>
              }
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export type Props = {

};

export default Navigation;
