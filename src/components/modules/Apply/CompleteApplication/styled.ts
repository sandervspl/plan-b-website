import styled, { keyframes } from 'styled-components';

const PaperPlaneHoverAnim = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  10% {
    transform: translate3d(-5px, 5px, 0);
  }
  20% {
    transform: translate3d(-5px, 5px, 0);
  }
  55% {
    transform: translate3d(5px, -5px, 0);
  }
  75% {
    transform: translate3d(5px, -5px, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
`;

export const SubmitButton = styled.button`
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

  input[type="submit"] {
    display: none;
  }

  svg {
    margin-left: 20px;
    width: 25px;
  }

  &:hover {
    transform: scale(1.01);

    svg {
      animation-name: ${PaperPlaneHoverAnim};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }

  &:active {
    transform: scale(.98);
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.color.tertiary};
`;

export const SubmitLabel = styled.label`
  margin-top: auto;
`;
