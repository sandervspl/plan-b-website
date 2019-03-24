import styled from 'styled-components';
import { media } from 'styles/utils';
import { ParagraphStyle } from 'common';

export const ButtonContainer = styled.button`
  ${ParagraphStyle};
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 16px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary.darkest};
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  border: 0;
  outline: 0;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  ${media.tablet`
    margin-top: 40px;
  `}
`;
