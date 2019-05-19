import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';

export const HeroContainer = styled.div<HeroContainerProps>`
  background: ${(props) => props.theme.color.__OLD__.secondary.darkest};
  height: 85vh;
  will-change: transform, opacity;
  transition: transform ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeOutCirc},
              opacity 300ms ease-out;

  ${(props) => !props.big && css`
    transform: translate(0, -35vh);

    ${media.tablet`
      transform: translate(0, -35vh);
    `}
  `}

  ${media.desktop`
    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      0 85%
    );
  `}
`;

type HeroContainerProps = {
  big?: boolean;
}
