import * as i from 'types';
import styled, { css } from 'styled-components';
import { NavLink } from 'common';

type MenuProps = i.VisibilityProps & {
  active: boolean;
}

type MenuItemProps = {
  num: number;
}

export const FullscreenMenuContainer = styled.div<FullscreenMenuContainerProps>`
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  z-index: 2;
  top: -250px;
  right: -1000px;
  width: 320%;
  height: 250%;
  background: ${(props) => props.theme.color.secondary.dark};
  transform: translate(100%, 100%) rotate(-40deg);
  transform-origin: bottom;
  transition: transform 1s ${(props) => props.theme.easing.easeOutQuint};
  will-change: transform;

  ${(props) => props.active && css`
    display: block;
    transform: translate(0, 0) rotate(-40deg);
    pointer-events: auto;
  `}

  ${(props) => props.visible && css`
    visibility: visible;
  `}
`;

type FullscreenMenuContainerProps = MenuProps;

export const MenuItems = styled.div<MenuItemsProps>`
  visibility: hidden;
  pointer-events: none;
  position: fixed;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 30px 30px 50px;
  transition: background 1ms 1s;

  ${(props) => props.active && css`
    visibility: visible;
    pointer-events: auto;
    background: ${(props) => props.theme.color.secondary.dark};
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
  z-index: 1;
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

  ${(props) => props.active && css<MenuLinkProps>`
    opacity: 1;
    transition: 600ms ${({ num }) => 600 + num * 100}ms opacity ${(props) => props.theme.easing.easeOutCirc};
  `}

  &.active {
    color: ${(props) => props.theme.color.primary};
  }
`;

type MenuLinkProps = MenuProps & MenuItemProps;
