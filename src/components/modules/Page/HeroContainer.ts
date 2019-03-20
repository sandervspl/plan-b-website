import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';

export const HeroContainer = styled.div<HeroContainerProps>`
  background: ${(props) => props.theme.color.secondary.darkest};
  height: 85vh;
  will-change: transform, opacity;
  transition: transform ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeOutCirc},
              opacity 300ms ease-out;

  ${(props) => !props.big && css`
    transform: translateY(-35vh);
  `}

  ${media.desktop`
    clip-path: polygon(
      0 0,       /* left top */
      100% 0,    /* right top */ 
      100% 100%, /* right bottom */
      0 85%      /* left bottom */
    );
  `}
`;

type HeroContainerProps = {
  big?: boolean;
}
