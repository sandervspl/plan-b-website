import styled from 'styled-components';
import { media } from 'styles';
import { HamburgerContainer } from '../Hamburger/styled';

const ROTATION = 40;

export const MobileNavContainer = styled.nav`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
  position: fixed;
  right: -65px;
  bottom: -32px;
  z-index: 3;
  width: 170px;
  height: 90px;
  background: ${(props) => props.theme.color.secondary.dark};
  transform: rotate(-${ROTATION}deg);
  
  ${media.tablet`
    display: none;
  `}

  ${HamburgerContainer} {
    transform: rotate(${ROTATION}deg);
  }
`;
