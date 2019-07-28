import styled, { css } from 'styled-components';
import { media } from 'styles';
import { NavLink, UnderlineStyleAnim } from 'common';
import { GlitchContainer } from 'common/Glitch/styled';
import { LogoNameIcon } from '../GlitchLogo/styled';

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  z-index: 10;
  width: 100vw;
  padding: 15px;
  background-color: ${(props) => props.theme.color.background.content};
  box-shadow: 0 4px 6px rgba(0,0,0,0.4);

  ${media.tablet`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0 auto;
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

    > div:first-of-type {
      position: relative;
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
    height: auto;
    
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
  display: none;

  ${media.tablet`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    width: 100%;
    list-style: none;
    justify-content: flex-start;
    margin-left: 170px;
    width: 300px;
  `}
`;

export const HeaderNavLinkStyle = css`
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.primary};
  text-transform: uppercase;

  &.active {
    color: ${(props) => props.theme.color.primary};
    cursor: pointer;

    &:after {
      background: ${(props) => props.theme.color.primary};
      transform: scaleX(1);
    }
  }

  ${UnderlineStyleAnim};
`;

export const NavItem = styled.li`
  padding: 0;
  margin: 0;
  margin-right: 20px;

  a, span {
    ${HeaderNavLinkStyle};
  }
`;

export const SignIn = styled(NavLink)`
  ${HeaderNavLinkStyle};
  display: none;
  color: ${(props) => props.theme.color.primary};
  font-family: ${(props) => props.theme.font.primary};

  &:not(.active) {
      &:after {
        background: ${(props) => props.theme.color.primary};
      }
  }

  ${media.tablet`
    display: block;
  `}
`;

export const HeaderInner = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${(props) => props.theme.width.page};
`;
