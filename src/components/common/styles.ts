import { css } from 'styled-components';

export const lineClamp = (lines = 2) => css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${lines};
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
`;
