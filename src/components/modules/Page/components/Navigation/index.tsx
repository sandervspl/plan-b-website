import React from 'react';
import dynamic from 'next/dynamic';
import { Link, NavLink } from 'common';
import { navigationMenu } from 'services';
import { useSelector } from 'hooks';
import {
  HeaderContainer, UserContainer, NavContainer, SignIn, JoinGuildBanner, NavList, NavItem,
} from './styled';

const User = dynamic(import('../User'));

const Navigation: React.FC<Props> = () => {
  const user = useSelector((state) => state.user);

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
