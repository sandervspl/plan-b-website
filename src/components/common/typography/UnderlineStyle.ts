import { css } from 'styled-components';
import { media } from 'styles';

export const UnderlineStyle = css`
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  background: ${(props) => props.theme.color.secondary};
  height: 2px;
  width: calc(100% - .02em);
`;

export const UnderlineStyleAnim = css`
  position: relative;

  &:after {
    ${UnderlineStyle};
    transform: scaleX(0);
    will-change: transform;
    transition: transform .2s ease-in-out;
    transform-origin: 100% 50%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  ${media.tablet`
    backface-visibility: hidden;

    &:hover:after {
      transform: scaleX(1);
      transform-origin: 0 50%;
    }
  `}
`;
