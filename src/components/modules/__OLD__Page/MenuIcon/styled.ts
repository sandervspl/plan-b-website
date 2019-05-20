import styled, { css } from 'styled-components';

export const VeganBurgerContainer = styled.div<Props>`
  position: fixed;
  z-index: 4;
  bottom: 15px;
  right: 15px;
  transform: rotate(0deg);
  transform-style: preserve-3d;
  transition: transform 300ms ease-in-out;

  &:hover {
    cursor: pointer;
  }

  span {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.color.__OLD__.primary};
    display: block;
    margin: 5px auto;
    transform: scale(1);
    transform-origin: left;
    transition: transform 0.2s ease-in-out;
    will-change: transform;

    &:first-child, &:last-child {
      margin: 0 auto;
    }
  }

  ${(props) => props.isActive && css`
    transform: rotate(40deg);

    span {
      &:nth-child(1) {
        transform: translate(17px,-4px) rotate(45deg) scaleX(0.5666666666666667);
      }

      &:nth-child(3) {
        transform: translate(17px, 4px) rotate(-45deg) scaleX(0.5666666666666667);
      }
    }
  `}
`;

type Props = {
  isActive: boolean;
};
