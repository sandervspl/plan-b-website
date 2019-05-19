import styled from 'styled-components';
import { media } from 'styles';
import { MaskWrap } from 'common/LinkTextFill/styled';

export const NavContainer = styled.nav`
  display: none;

  ${media.tablet`
    display: block;
    padding: 0 55px;
    height: 30px;

    ${MaskWrap} {
        > a, > span {
        color: ${(props) => props.theme.color.__OLD__.tertiary};
        font: 600 23px/25px ${(props) => props.theme.font.primary};
        text-decoration: none;
        text-transform: uppercase;
        transition: color .1s linear;

        &.active {
          color: ${(props) => props.theme.color.__OLD__.primary};
        }
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
