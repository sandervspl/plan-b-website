import styled from 'styled-components';

export const Tag = styled.span`
  color: ${(props) => props.theme.color.primary.dark};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: bold;
  font-size: 14px;
  text-transform: uppercase;
`;
