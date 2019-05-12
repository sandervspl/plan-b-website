import styled from 'styled-components';
import { media } from 'styles';

export const Button = styled.button`
  padding: 13px 0;
  width: 100%;
  font-size: 18px;
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

  ${media.tablet`
    padding: 17px 75px;
    font-size: 30px;
  `}

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
