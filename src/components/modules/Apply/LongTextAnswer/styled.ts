import styled from 'styled-components';
import { Field } from 'react-final-form';

export const TextAreaField = styled(Field)`
  width: 100%;
  height: 100%;
  padding: 20px;
  resize: none;
  background: none;
  border: 1px solid ${(props) => props.theme.color.primary.dark};
  outline: 0;
  color: ${(props) => props.theme.color.primary};
  font-size: 16px;
  line-height: 1.58;
  font-family: ${(props) => props.theme.font.primary};
`;
