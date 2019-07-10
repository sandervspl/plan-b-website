import styled from 'styled-components';
import { media } from 'styles';
import { lineClamp } from 'common/styles';

export const DateContainer = styled.p`
  margin: 0;
  font-size: 13px;
  font-family: ${(props) => props.theme.font.primary};
  line-height: 17px;
  color: ${(props) => props.theme.color.secondary};
  ${lineClamp(3)};

  svg {
    margin-right: 3px;
    height: 12px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(2px);

    ${media.tablet`
      height: 16px;
      margin-right: 5px;
    `}
  }
`;
