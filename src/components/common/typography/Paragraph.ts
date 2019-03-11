import styled from 'styled-components';
import { BaseText } from './BaseText';

export const Paragraph = styled(BaseText).attrs({ as: 'p' })`
  margin: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color.paragraph};
`;
