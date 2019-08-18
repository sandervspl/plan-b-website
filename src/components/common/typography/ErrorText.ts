import styled from 'styled-components';
import { Paragraph } from './Paragraph';

export const ErrorText = styled(Paragraph)`
  font-size: 14px !important;
  color: ${(props) => props.theme.color.negative};
`;
