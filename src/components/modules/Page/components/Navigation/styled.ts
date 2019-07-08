import styled, { css } from 'styled-components';
import { media } from 'styles';
import { NavLink, UnderlineStyle } from 'common';
import { GlitchContainer } from 'common/Glitch/styled';
import { LogoNameIcon } from '../GlitchLogo/styled';

export const HeaderContainer = styled.header`
  padding: 15px 25px;

  ${media.tablet`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 15px 0 30px;
    margin: 0 auto;
    max-width: ${(props) => props.theme.width.page};
  `}
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 35px;

  ${media.tablet`
    min-height: 0;

    > * {
      margin-left: 20px;
    }

    ${LogoNameIcon} {
      display: none;
    }
  `}
`;

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 25px;

  ${LogoNameIcon} {
    display: none;

    ${media.tablet`
      display: block;
    `}
  }

  ${GlitchContainer} {
    position: absolute;
    top: 20px;
    left: 20px;
    height: 25px;
    width: 80px;

    ${media.tablet`
      top: 5px;
      left: 0;
      height: 50px;
      width: 120px;
    `}
  }

  ${media.tablet`
    margin-top: 0;
    height: 90px;
    
    > a {
      position: relative;
      height: 50px;

      svg {
        height: 100%;
      }
    }
  `}
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;

  ${media.tablet`
    margin-left: 170px;
    width: 300px;
  `}
`;

export const HeaderNavLinkStyle = css`
  position: relative;
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.primary};
  text-transform: uppercase;

  &:after {
    ${UnderlineStyle};
    transform: scaleX(0);
    will-change: transform;
    transition: transform .2s ease-in-out;
    transform-origin: 100% 50%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  &.active {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;

    &:after {
      background: ${(props) => props.theme.color.primary};
      transform: scaleX(1);
    }
  }

  ${media.tablet`
    backface-visibility: hidden;

    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  `}
`;

export const NavItem = styled.li`
  padding: 0;
  margin: 0;

  a, span {
    ${HeaderNavLinkStyle};
  }
`;

export const SignIn = styled(NavLink)`
  ${HeaderNavLinkStyle};
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.primary};

  &:not(.active) {
      &:after {
        background: ${(props) => props.theme.color.primary};
      }
  }
`;
