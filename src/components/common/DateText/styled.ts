import styled from 'styled-components';
import { media } from 'styles';
import { lineClamp } from 'common/styles';

export const DateContainer = styled.p`
  display: flex;
  flex-grow: 2;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1;
  margin: 0;
  font-size: 12px;
  font-family: ${(props) => props.theme.font.primary};
  line-height: 17px;
  color: ${(props) => props.theme.color.secondary};
  ${lineClamp(3)};

  svg {
    margin-right: 3px;
    height: 12px;
    fill: ${(props) => props.theme.color.secondary};
    transform: translateY(2px);
  }

  ${media.tablet`
    top: 20px;
    right: 20px;
    font-size: 16px;

    svg {
      height: 16px;
      margin-right: 5px;
    }
  `}
`;
