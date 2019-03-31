import styled from 'styled-components';
import { media } from 'styles';

const ROTATION = 50;

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
    width: 110px;
    height: 230px;
    background: ${(props) => props.theme.color.secondary.dark};
    transform: rotate(${ROTATION}deg) translate(95%, 20%);
  }

  ${media.tablet`
    display: none;
  `}
`;
