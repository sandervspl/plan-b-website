import styled, { css } from 'styled-components';
import * as glitch from 'styles/glitch';

export const GlitchContainer = styled.div`
  position: absolute;
`;

export const GlitchStyle = css`
  position: absolute;
  top: -5px;
  left: -10px;
  width: calc(100% + 10px * 2);
  height: calc(100% + 5px * 2);

  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    > g path:nth-child(2) {
      fill: ${(props) => props.theme.color.glitch.primary};
    }

    > g path:nth-child(4) {
      fill: ${(props) => props.theme.color.glitch.secondary};
    }
  }

  &:nth-child(1) {
    animation: ${glitch.flashAnim3} 0s steps(1,end) infinite;
  }

  &:nth-child(2) {
    transform: translate3d(10px, 0, 0);
    animation: ${glitch.anim1} 4s infinite linear alternate;

    > g path:nth-child(2) {
      fill: ${(props) => props.theme.color.glitch.primary};
      opacity: .2;
    }
  }

  &:nth-child(3) {
    transform: translate3d(-10px, 0, 0);
    animation: ${glitch.anim2} 4s infinite linear alternate;

    > g path:nth-child(4) {
      fill: ${(props) => props.theme.color.glitch.secondary};
      opacity: .2;
    }
  }

  &:nth-child(4) {
    transform: translate3d(0, -5px, 0) scale3d(-1, -1, 1);
    animation: ${glitch.anim3} 4s infinite linear alternate;

    > g path:nth-child(2) {
      fill: ${(props) => props.theme.color.glitch.primary};
      opacity: .3;
    }

    > g path:nth-child(4) {
      fill: ${(props) => props.theme.color.glitch.secondary};
      opacity: .1;
    }
  }

  /* Hover flash animation on last image */
  &:nth-child(5) {
    animation: ${glitch.flashAnim1} 0s steps(1,end) infinite;
  }

  &:nth-child(6) {
    animation: ${glitch.flashAnim2} 0s steps(1,end) infinite;
  }
`;

export const Glitch = (component: React.ComponentType) => styled(component).attrs((props: GlitchProps) => props.animtime && ({
  style: {
    'animationDuration': `${props.animtime}ms`,
  },
}))`
  ${GlitchStyle};
`;

type GlitchProps = {
  animtime?: number;
}
