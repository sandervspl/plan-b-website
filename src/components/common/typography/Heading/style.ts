import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Cape = styled.div<CapeProps>`
  display: none;
  
  ${(props) => props.capeColor && css`
    position: absolute;
    top: 3px;
    left: -4px;
    z-index: -1;
    width: 100%;
    height: calc(100% + 5px);
    background-color: ${props.capeColor};
    clip-path: polygon(0 0, 100% 0, 100% 95%, 0% 100%);
  `}

  ${media.tablet`
    display: block;
  `}
`;

type CapeProps = {
  capeColor?: string;
}

export const Text = styled.h2`
  position: relative;
  z-index: 1;
  padding: 5px 6px;
  background: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  color: #FFFFFF;
  text-align: right;

  ${media.tablet`
    padding: 10px 20px;
    font-size: 30px;
  `}
`;

export const HeadingContainer = styled.div`
  position: relative;
`;
