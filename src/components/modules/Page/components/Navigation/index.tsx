import React from 'react';
import dynamic from 'next/dynamic';
import { Link, NavLink } from 'common';
import { navigationMenu } from 'services';
import { useSelector } from 'hooks';
import {
  HeaderContainer, UserContainer, NavContainer, SignIn, NavList, NavItem, LogoNameIcon,
} from './styled';

const User = dynamic(import('../User'));

const Navigation: React.FC = () => {
  const user = useSelector((state) => state.user);

  return (
    <HeaderContainer>
      <UserContainer>
        <LogoNameIcon />
        {user.isSignedIn ? (
          <User />
        ) : !user.loading ? (
          <SignIn to="login">Sign in</SignIn>
        ) : null}
        {/* {!user.isSignedIn && (
          <Link to="apply">
            <JoinGuildBanner>Join the guild</JoinGuildBanner>
          </Link>
        )} */}
      </UserContainer>

      <NavContainer>
        <LogoNameIcon />

        <NavList>
          {navigationMenu.map((item, i) => (
            <NavItem key={i}>
              {item.external
                ? <Link external to={item.page} disabled={item.disabled}>{item.label}</Link>
                : <NavLink to={item.page} disabled={item.disabled}>{item.label}</NavLink>
              }
            </NavItem>
          ))}
        </NavList>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Navigation;
