import styled, { css } from 'styled-components';

export const HamburgerContainer = styled.div<Props>`
  &:hover {
    cursor: pointer;
  }

  span {
    width: 30px;
    height: 3px;
    background-color: ${(props) => props.theme.color.primary};
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

  ${(props) => props.active && css`
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
  active: boolean;
};
