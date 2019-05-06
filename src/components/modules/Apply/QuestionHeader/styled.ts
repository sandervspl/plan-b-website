import styled from 'styled-components';

export const QuestionHeaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 20px 80px 20px 20px;
  background: ${(props) => props.theme.color.secondary.dark};
  white-space: nowrap;
`;
