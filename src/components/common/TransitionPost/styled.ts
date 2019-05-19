import * as i from 'types';
import styled, { css, keyframes } from 'styled-components';

export const TransitionOverlay = styled.div<TransitionOverlayProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 1;
  background: ${(props) => props.theme.color.__OLD__.secondary.dark};
  will-change: transform;
  transform-origin: ${(props) => props.direction};
  transform: scaleX(1);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};

  ${(props) => props.isVisible && css`
    transform: scaleX(0);
  `}
`;

TransitionOverlay.defaultProps = {
  direction: 'left',
};

type TransitionOverlayProps = i.VisibilityProps & {
  direction?: 'left' | 'right';
};

const AppearAnim = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const TransitionPostContainer = styled.div`
  position: relative;
  width: 100%;
  animation-name: ${AppearAnim};
  animation-duration: 1000ms;
  animation-timing-function: ${(props) => props.theme.easing.easeOutCirc};
  animation-fill-mode: forwards;
`;
