import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TextInputField } from 'modules/Apply/styled';

export const Placeholder = styled.span<PlaceholderProps>`
  display: none;
  left: 0;
  z-index: 0;
  color: ${(props) => props.theme.color.__OLD__.primary.dark};
  cursor: text;
  font-weight: normal;
  
  ${(props) => props.visible && css`
    display: inline-block;
  `}
`;

type PlaceholderProps = {
  visible?: boolean;
}

export const FakeInputFieldContainer = styled.span`
  position: relative;
`;

export const FakeInputField = styled(TextInputField)<FakeInputFieldProps>`
  min-width: initial;
  max-height: 200px;
  overflow: hidden;

  ${media.tablet`
    min-width: initial;
  `}

  ${(props) => !props.hasInput && css`
    ${media.tablet`
      min-width: 1px;
    `}
  `}
`;

type FakeInputFieldProps = {
  hasInput?: boolean;
}
