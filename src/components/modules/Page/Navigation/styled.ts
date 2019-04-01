import styled from 'styled-components';
import { media } from 'styles';

export const NavContainer = styled.nav`
  display: none;

  ${media.tablet`
    display: block;
    padding: 0 55px;
    height: 30px;

    a {
      color: ${(props) => props.theme.color.tertiary};
      font: 600 23px/25px ${(props) => props.theme.font.primary};
      text-decoration: none;
      text-transform: uppercase;
      transition: color .1s linear;

      &.active {
        color: ${(props) => props.theme.color.primary};
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
  height: 100%;
  list-style: none;

  li {
    position: relative;
  }
`;
