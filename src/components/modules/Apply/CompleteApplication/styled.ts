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

export const SuccessContainer = styled.div`
  a {
    margin-top: 50px;
    width: 100%;
  }
`;

export const ErrorContainer = styled.div`
  figure {
    display: inline-block;
    position: relative;
    margin: 0 2px 0 5px;
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    vertical-align: sub;

    img {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const OutroGrid = styled.div`
  div:first-child {
    button {
      margin-top: 50px;
    }
  }
  
  > div:nth-child(2) {
    display: none;
  }

  ${media.tablet`
    display: grid;
    grid-template-columns: 33% 67%;
    height: 100%;

    > div:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70%;
        opacity: .1;
      }
    }
  `}
`;
