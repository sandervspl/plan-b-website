import styled from 'styled-components';
import { media } from 'styles';

export const NavContainer = styled.nav`
  display: none;

  ${media.tablet`
    display: flex;
    justify-content: space-between;
    padding: 0 55px 20px;

    a {
      color: ${(props) => props.theme.color.tertiary};
      font: 400 23px/25px ${(props) => props.theme.font.primary};
      text-decoration: none;
      text-transform: uppercase;
      transition: color .1s linear;

      &:hover {
        color: ${(props) => props.theme.color.primary.medium};
      }

      &.active {
        color: ${(props) => props.theme.color.primary};
      }
    }
  `}
`;
