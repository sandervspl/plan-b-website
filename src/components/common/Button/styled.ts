import tinycolor from 'tinycolor2';
import styled, { css, keyframes } from 'styled-components';
import { media } from 'styles';
import { ButtonProps } from '.';

const FakeLoadingAnim = keyframes`
  0% {
    transform: scaleX(0);
  }

  1% {
    transform: scaleX(.3);
  }
  
  5% {
    transform: scaleX(.45);
  }

  15% {
    transform: scaleX(.5);
  }
  
  20% {
    transform: scaleX(.6);
  }
  
  25% {
    transform: scaleX(.65);
  }
  
  30% {
    transform: scaleX(.7);
  }
  
  40% {
    transform: scaleX(.75);
  }
  
  100% {
    transform: scaleX(.98);
  }
`;

export const LoadingProgressInner = styled.span<LoadingProgressInnerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: left;
  opacity: 1;
  background-color: #ff8181;

  ${(props) => props.loading && css`
    animation: ${FakeLoadingAnim} 30s linear 1 forwards;
  `}
`;

type LoadingProgressInnerProps = {
  loading?: boolean;
}

export const LoadingProgress = styled.span`
  background-color: #ff8181;
`;

export const Content = styled.span`
  display: block;
  position: relative;
`;

export const ButtonContainer = styled.button<ButtonProps>`
  position: relative;
  padding: 12px 20px;
  font-size: 16px;
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.font.primary};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.primary};
  border: 0;
  outline: 0;
  border-radius: 5px;
  cursor: pointer;
  will-change: transform, background-color;
  transition: transform .05s, background-color .1s;
  overflow: hidden;

  svg {
    fill: ${(props) => props.theme.color.secondary};
  }

  &:hover {
    background-color: ${(props) => tinycolor(props.theme.color.primary.slice(1)).desaturate(10).toString()};
  }

  &:active {
    transform: scale(.98);
  }

  &:focus, > ${Content}:focus {
    outline: 0;
  }

  &:focus > ${Content} {
    box-shadow: 0 0 2px 3px #0099E0;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) => props.theme.color.primary.dark};
  }

  ${(props) => props.styleType === 'simple' && css`
    background: transparent;
    border: 1px solid ${(props) => props.theme.color.secondary.darker};
    color: ${(props) => props.theme.color.secondary.darker};

    &:hover {
      border: 1px solid ${(props) => props.theme.color.secondary};
      color: ${(props) => props.theme.color.secondary};
      background: transparent;
    }
  `}

  ${media.tablet`
    padding: 12px 15px;
    font-size: 18px;
  `}
`;
