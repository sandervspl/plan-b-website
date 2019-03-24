import styled, { css } from 'styled-components';

export const FadedBackgroundImageContainer = styled.div<FadedBackgroundImageContainerProps>`
  ${(props) => props.next && css`
    opacity: 0;
  `}
`;

type FadedBackgroundImageContainerProps = {
  next?: boolean;
}

export const BackgroundImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 110%;
  height: 110%;
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
