import styled from 'styled-components';
import LogoSvg from 'vectors/logo.svg';
import { media } from 'styles';
import * as glitch from 'styles/glitch';

export const LogoContainer = styled.div`
  display: none;
  position: absolute;
  top: 17%;
  left: calc(50% - 136.5px);
  width: 273px;
  height: 253px;

  ${media.tablet`
    display: initial;
  `}
`;

export const Logo = styled(LogoSvg).attrs((props: LogoProps) => props.animTime && ({
  style: {
    'animationDuration': `${props.animTime}ms`,
  },
}))`
  position: absolute;
  top: -5px;
  left: -10px;
  width: calc(100% + 10px * 2);
  height: calc(100% + 5px * 2);

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

type LogoProps = {
  animTime?: number;
}
