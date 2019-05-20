import styled, { keyframes } from 'styled-components';
import { getStaticUrl } from 'services';
import LogoSvg from 'images/recruitment/bg.jpg';
import { media } from 'styles';
import * as glitch from 'styles/glitch';

export const LogoContainer = styled.div<LogoContainerProps>`
  display: none;
  position: absolute;
  top: 14%;
  left: calc(50% - 136.5px);
  width: 273px;
  height: 253px;

  ${media.tablet`
    display: initial;

    > svg {
      position: absolute;
      top: calc(-1 * 5px);
      left: calc(-1 * 10px);
      width: calc(100% + 10px * 2);
      height: calc(100% + 5px * 2);

      &:nth-child(5),
      &:nth-child(6) {
        > g path:nth-child(2) {
          fill: #af4949;
        }

        > g path:nth-child(4) {
          fill: limegreen;
        }
      }

      &:nth-child(1) {
        animation: ${glitch.flashAnim3} ${(props) => props.randomTime1}ms steps(1,end) infinite;
      }

      &:nth-child(2) {
        transform: translate3d(10px, 0, 0);
        animation: ${glitch.anim1} 4s infinite linear alternate;

        > g path:nth-child(2) {
          fill: #af4949;
          opacity: .2;
        }
      }

      &:nth-child(3) {
        transform: translate3d(calc(-1 * 10px), 0, 0);
        animation: ${glitch.anim2} 4s infinite linear alternate;

        > g path:nth-child(4) {
          fill: limegreen;
          opacity: .2;
        }
      }

      &:nth-child(4) {
        transform: translate3d(0, calc(-1 * 5px), 0) scale3d(-1, -1, 1);
        animation: ${glitch.anim3} 4s infinite linear alternate;

        > g path:nth-child(2) {
          fill: #af4949;
          opacity: .3;
        }

        > g path:nth-child(4) {
          fill: limegreen;
          opacity: .1;
        }
      }

      /* Hover flash animation on last image */
      &:nth-child(5) {
        animation: ${glitch.flashAnim1} ${(props) => props.randomTime1}ms steps(1,end) infinite;
      }

      &:nth-child(6) {
        animation: ${glitch.flashAnim2} ${(props) => props.randomTime2}ms steps(1,end) infinite;
      }
    }
  `}
`;

type LogoContainerProps = {
  randomTime1: number;
  randomTime2: number;
}
