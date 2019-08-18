import styled from 'styled-components';
import { media } from 'styles';

export const QuestionHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  
  ${media.tablet`
    white-space: nowrap;
    padding: 20px 80px 20px 0;
  `}
`;
