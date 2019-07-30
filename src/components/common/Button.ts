import styled, { css } from 'styled-components';
import { media } from 'styles';

export const Button = styled.button<ButtonProps>`
  padding: 7px;
  width: 100%;
  font-size: 16px;
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.background.light};
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  will-change: transform;
  transition: 50ms transform;

  svg {
    fill: ${(props) => props.theme.color.secondary};
  }

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(.98);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.color.background.light};
  }

  ${(props) => props.styleType === 'simple' && css`
    background: transparent;
    border: 1px solid ${(props) => props.theme.color.secondary.darker};
    color: ${(props) => props.theme.color.secondary.darker};

    &:hover {
      border: 1px solid ${(props) => props.theme.color.secondary};
      color: ${(props) => props.theme.color.secondary};
    }
  `}

  ${media.tablet`
    padding: 17px 75px;
    font-size: 30px;
  `}
`;

type ButtonProps = {
  styleType?: 'simple';
}
