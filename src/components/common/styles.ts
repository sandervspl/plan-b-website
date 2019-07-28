import { css } from 'styled-components';

export const lineClamp = (lines = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;

export const boxGradient = css`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(180deg, rgba(0,0,0,0.00) 0%, #171717 100%);
  }
`;
