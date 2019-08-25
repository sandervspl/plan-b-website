import styled from 'styled-components';

export const ItemDetailContainer = styled.div`
  overflow: hidden;
`;

export const ItemIcon = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.border};
  object-fit: cover;
  will-change: border;
  transition: border 100ms;

  &:hover {
    border-color: ${(props) => props.theme.color.secondary.dark};
  }
`;
