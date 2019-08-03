import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, NavLink, Button } from 'common';
import { navigationMenu } from 'services';
import { useSelector } from 'hooks';
import GlitchLogo from '../GlitchLogo';
import HamburgerMenu from '../HamburgerMenu';
import UserMenu from '../UserMenu';
import {
  HeaderContainer, UserContainer, NavContainer, SignIn, NavList, NavItem, HeaderInner,
} from './styled';

const User = dynamic(import('../User'));

const Navigation: React.FC = () => {
  const user = useSelector((state) => state.user);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => setMenuOpen((open) => !open);

  const closeMenu = () => setMenuOpen(false);

  return (
    <HeaderContainer>
      <HeaderInner>
        <UserContainer>
          {!user.isSignedIn && !user.loading && (
            <Link to="apply">
              <Button styleType="simple">
                Join the guild!
              </Button>
            </Link>
          )}

          <OutsideClickHandler onOutsideClick={closeMenu}>
            {user.isSignedIn ? (
              <User onClick={toggleMenuOpen} />
            ) : !user.loading ? (
              <SignIn to="login">Sign in</SignIn>
            ) : null}

            <HamburgerMenu onClick={toggleMenuOpen} />

            <UserMenu open={menuOpen} />
          </OutsideClickHandler>
        </UserContainer>


        <NavContainer>
          <GlitchLogo />

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
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Navigation;
