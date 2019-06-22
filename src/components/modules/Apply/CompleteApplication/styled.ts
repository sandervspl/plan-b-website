import styled, { keyframes } from 'styled-components';
import { media } from 'styles';
import { Button } from 'common';

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

export const SubmitButton = styled(Button)`
  input[type="submit"] {
    display: none;
  }

  svg {
    margin-left: 10px;
    width: 20px;
    
    ${media.tablet`
      margin-left: 20px;
      width: 25px;
    `}
  }

  &:hover {
    svg {
      animation-name: ${PaperPlaneHoverAnim};
      animation-duration: 2s;
      animation-iteration-count: infinite;
    }
  }
`;

export const Name = styled.span`
  text-transform: capitalize;
  color: ${(props) => props.theme.color.secondary};
`;

export const SubmitLabel = styled.label`
  margin-top: auto;
  width: 100%;
`;
