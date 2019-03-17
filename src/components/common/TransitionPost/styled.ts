import * as i from 'types';
import styled, { css } from 'styled-components';

export const TransitionOverlay = styled.div<TransitionOverlayProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.secondary.dark};
  will-change: transform;
  transform-origin: ${(props) => props.direction};
  transform: scaleX(1);
  transition: transform 1s 300ms ${(props) => props.theme.easing.easeOutCirc};

  ${(props) => props.visible && css`
    transform: scaleX(0);
  `}
`;

TransitionOverlay.defaultProps = {
  direction: 'left',
};

type TransitionOverlayProps = i.VisibilityProps & {
  direction?: 'left' | 'right';
};

export const TransitionPostContainer = styled.div`
  position: relative;
`;
