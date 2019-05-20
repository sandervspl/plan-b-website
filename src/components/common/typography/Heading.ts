import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Heading = styled.h2<Props>`
  padding: 5px 6px;
  background: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: #FFFFFF;
  text-align: right;

  ${media.tablet<Props>`
    padding: 10px 20px;
    font-size: 30px;

    ${(props) => props.capeColor && css`
      position: relative;

      &:before {
        content: '';
        position: absolute;
        top: 3px;
        left: -4px;
        z-index: -1;
        width: 100%;
        height: calc(100% + 4px);
        background-color: ${props.capeColor};
        clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
      }
    `}
  `}
`;

type Props = {
  capeColor?: string;
}
