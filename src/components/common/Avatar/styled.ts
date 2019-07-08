import styled from 'styled-components';

export const AvatarContainer = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.background};
`;
