import styled from 'styled-components';

export const Tag = styled.span<TagProps>`
  padding: 4px 6px 3px;
  font-family: ${(props) => props.theme.font.primary};
  color: #FFFFFF;
  font-size: 12px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-transform: uppercase;
`;

type TagProps = {
  color: string;
}
