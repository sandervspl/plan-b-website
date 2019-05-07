import styled from 'styled-components';

export const Button = styled.button`
  padding: 17px 75px;
  font-size: 30px;
  color: ${(props) => props.theme.color.secondary.dark};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.primary};
  border: 0;
  outline: 0;
  cursor: pointer;
  will-change: transform;
  transition: 50ms transform;

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(.98);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.color.primary.medium};
  }
`;
