import { css } from 'styled-components';

export const GradientHeadingStyle = css`
  padding: 15px;
  background: ${(props) => props.theme.color.background.gradient.title};
  background-color: ${(props) => props.theme.color.background.content};
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.color.border.primary};
  border-bottom: 1px solid ${(props) => props.theme.color.border.primary};
`;
