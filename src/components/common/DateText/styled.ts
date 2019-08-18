import styled from 'styled-components';
import { media } from 'styles';

export const DateContainer = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 13px;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.secondary};

  svg {
    margin-right: 3px;
    height: 12px;
    fill: ${(props) => props.theme.color.secondary};

    ${media.tablet`
      height: 16px;
      margin-right: 5px;
    `}
  }
`;
