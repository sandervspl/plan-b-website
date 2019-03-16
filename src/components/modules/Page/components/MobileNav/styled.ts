import styled from 'styled-components';
import { media } from 'styles';

export const MobileNavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  background: ${(props) => props.theme.color.secondary.dark};
  
  ${media.tablet`
    display: none;
  `}
`;
