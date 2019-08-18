import styled, { css, keyframes } from 'styled-components';

import LogoSvg from 'vectors/logo.svg';

const pulse = keyframes`
  0% {opacity: 0.2;}
  50% {opacity: 1.0;}
  100% {opacity: 0.2;}
`;

export const BullLogo = styled(LogoSvg)`
  display: none;
  width: 240px;
  animation: ${pulse} 2s infinite ease-in-out;
`;

export const LoadingContainer = styled.div<LoadingContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  width: 100%;
  min-height: 100vh;
  background: ${(props) => props.theme.color.background};
  opacity: 0;
  pointer-events: none;
  transition: opacity .2s ease-in-out;

  ${(props) => props.active && css`
    opacity: 1;
    pointer-events: auto;

    ${BullLogo} {
      display: block;
    }
  `}
`;

type LoadingContainerProps = {
  active?: boolean;
};
