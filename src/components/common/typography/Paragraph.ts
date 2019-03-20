import styled, { css } from 'styled-components';
import { BaseText } from './BaseText';

export const ParagraphStyle = css`
  margin: 0;
  color: ${(props) => props.theme.color.paragraph};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 300;
  font-size: 18px;
  line-height: 1.58;
  letter-spacing: -.003em;
`;

export const Paragraph = styled(BaseText).attrs({ as: 'p' })`
  ${ParagraphStyle};
`;
