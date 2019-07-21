import styled, { css } from 'styled-components';
import { media } from 'styles';

const headingSize = (as: HeadingProps['as']) => {
  let px = 30;
  let bigMediaPx = 50;

  switch (as) {
    case 'h1':
    default: px = 30; bigMediaPx = 50; break;
    case 'h2': px = 20; bigMediaPx = 30; break;
    case 'h3': px = 14; bigMediaPx = 25; break;
  }

  return css`
    font-size: ${px}px;

    ${media.tablet`
      font-size: ${bigMediaPx}px;
    `}
  `;
};

export const Heading = styled.h1<HeadingProps>`
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.secondary};
  text-transform: uppercase;
  
  ${(props) => headingSize(props.as)};
`;

type HeadingProps = {
  as: 'h1' | 'h2' | 'h3';
};
