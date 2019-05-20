import styled from 'styled-components';
import { media } from 'styles';

export const MobileNavContainer = styled.nav`
  &:before {
    content: '';
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 20px;
    position: fixed;
    right: 0;
    bottom: 0;
    z-index: 1;
    width: 70px;
    height: 70px;
    background: ${(props) => props.theme.color.__OLD__.secondary.dark};
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 0% 100%);
  }

  ${media.tablet`
    display: none;
  `}
`;
