import styled from 'styled-components';

export const Paragraph = styled.p`
  font-family: ${(props) => props.theme.font.primary};
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: ${(props) => props.theme.color.paragraph};
`;
