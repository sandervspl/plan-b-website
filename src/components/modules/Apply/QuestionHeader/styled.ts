import styled from 'styled-components';
import { media } from 'styles';
import { Header } from 'common';

export const QuestionHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  ${Header} {
    font-size: 28px;
    line-height: 1.2;
  }
  
  ${media.tablet`
    white-space: nowrap;
    padding: 20px 80px 20px 20px;
    background: ${(props) => props.theme.color.__OLD__.secondary.dark};

    ${Header} {
      font-size: 65px;
      line-height: 1.1;
    }
  `}
`;
