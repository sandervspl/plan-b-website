import styled, { css } from 'styled-components';

export const BaseText = styled.span<BaseTextProps>`
  ${(props) => props.dark && css`
    color: ${(props) => props.theme.color.secondary}!important;
  `}
`;

type BaseTextProps = {
  dark?: boolean;
}
