import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles';
import { BaseText } from './BaseText';

export const __OLD__Header = styled(BaseText).attrs<HeaderProps>((props) => ({
  as: props.as,
}))<HeaderProps>`
  font-size: 65px;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};

  ${(props) => props.as === 'h2' && css`
    font-size: 30px;

    ${media.tablet`
      font-size: 40px;
    `}
  `}
`;

export type HeaderProps = {
  as?: i.HeaderType;
}

__OLD__Header.defaultProps = {
  as: 'h1',
};
