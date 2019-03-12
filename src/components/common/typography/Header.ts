import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { BaseText } from './BaseText';

export const Header = styled(BaseText).attrs<Props>((props) => ({
  as: props.as,
}))<Props>`
  font-size: 65px;
  font-weight: 700;
  line-height: 60px;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  
  ${media.tablet`
    line-height: 70px;
  `}

  ${(props) => props.as === 'h2' && css`
    font-size: 30px;

    ${media.tablet`
      font-size: 40px;
    `}
  `}
`;

type Props = {
  as?: i.HeaderType;
}

Header.defaultProps = {
  as: 'h1',
};
