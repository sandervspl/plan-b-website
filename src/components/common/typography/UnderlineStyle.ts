import { css } from 'styled-components';

export const UnderlineStyle = css`
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  background: ${(props) => props.theme.color.secondary};
  height: 2px;
  width: calc(100% - .02em);
`;
