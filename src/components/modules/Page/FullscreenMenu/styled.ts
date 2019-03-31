import * as i from 'types';
import styled, { css } from 'styled-components';
import { TRANSITION_TIME_MS_SHORT } from 'styles/pageTransition';
import { NavLink } from 'common';

type MenuProps = i.VisibilityProps & {
  active: boolean;
}

type MenuItemProps = {
  num: number;
}

export const FullscreenMenuContainer = styled.div<FullscreenMenuContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  overflow: visible;
  transform: scale(0, 1);
  transform-origin: bottom right;
  transition: all 1ms linear;
  transition-delay: 1s;

  ${(props) => props.active && css`
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    transform: scale(1, 1);
    transition-delay: 0s;
  `};

  &:before {
    content: '';
    display: block;
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 2;
    width: 230vh;
    height: 280vh;
    background: ${(props) => props.theme.color.secondary.dark};
    transform: scale(0, 0) translate(-120vw, 180vh) rotate(50deg);
    transform-origin: bottom right;
    transition: all 800ms ${(props) => props.theme.easing.easeOutQuint};
    transition-delay: 250ms;

    ${(props) => props.active && css`
      transform: scale(1, 1) translate(-120vw, 180vh) rotate(50deg);
      transition-delay: 0ms;
    `};
  }
`;

type FullscreenMenuContainerProps = MenuProps;

export const MenuItems = styled.div<MenuItemsProps>`
  pointer-events: none;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 30px 30px 100px;

  ${(props) => props.active && css`
    pointer-events: auto;
  `}
`;

type MenuItemsProps = MenuProps;

export const LinkContainer = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 20px;
`;

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  background: ${(props) => props.theme.color.primary};
  transform-origin: left;
  will-change: transform;
`;

export const MenuLink = styled(NavLink)<MenuLinkProps>`
  display: block;
  color: ${(props) => props.theme.color.tertiary};
  font-family: ${(props) => props.theme.font.primary};
  text-decoration: none;
  font-size: 33px;
  font-weight: 600;
  opacity: 0;
  will-change: opacity;
  text-transform: uppercase;
  transition: ${TRANSITION_TIME_MS_SHORT}ms opacity ${(props) => props.theme.easing.easeOutCirc};
  transition-delay: ${({ num }) => num * 50}ms;

  ${(props) => props.active && css<MenuLinkProps>`
    opacity: 1;
    transition-delay: ${({ num }) => 300 + num * 100}ms;
  `}

  &.active {
    color: ${(props) => props.theme.color.primary};
  }
`;

type MenuLinkProps = MenuProps & MenuItemProps;
