import styled from 'styled-components';

export const AvatarContainer = styled.img.attrs({ loading: 'lazy' })`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.color.background};
`;
