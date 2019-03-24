import styled, { css } from 'styled-components';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';

export const FadedBackgroundImageContainer = styled.div<FadedBackgroundImageContainerProps>`
  opacity: 0;
  will-change: opacity;
  transition: opacity ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeInOutCirc};

  ${(props) => props.active && css`
    opacity: 1;
  `}
`;

type FadedBackgroundImageContainerProps = {
  active?: boolean;
}

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: .3;
  transform: translate(-20%);
  /* clip-path: polygon(
    0 -50%,
    100% 50%,
    100% 150%,
    0 50%
  ); */
`;

export const Fade = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: -webkit-linear-gradient(
    left, 
    rgba(0,0,0,0) 20%,
    rgba(0,0,0,1) 90%
  );
`;
