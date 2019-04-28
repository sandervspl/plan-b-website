import styled from 'styled-components';

export const QuestionHeaderContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  padding: 20px 50px 20px 20px;
  background: ${(props) => props.theme.color.secondary};
  white-space: nowrap;
`;
