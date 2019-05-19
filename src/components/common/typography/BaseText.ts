import styled, { css } from 'styled-components';

export const BaseTextStyle = css<BaseTextProps>`
  ${(props) => props.dark && css`
    color: ${(props) => props.theme.color.__OLD__.secondary}!important;
  `}
`;

export const BaseText = styled.span`
  ${BaseTextStyle};
`;

type BaseTextProps = {
  dark?: boolean;
}
