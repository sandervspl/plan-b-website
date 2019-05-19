import styled from 'styled-components';

export const Tag = styled.span<TagProps>`
  margin-left: 5px;
  padding: 3px 6px 2px;
  font-family: ${(props) => props.theme.font.primary};
  color: #FFFFFF;
  font-size: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  text-transform: uppercase;
`;

type TagProps = {
  color: string;
}
