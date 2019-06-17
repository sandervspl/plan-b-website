import * as i from 'types';
import styled, { css } from 'styled-components';
import { media } from 'styles';

export const ProgressContainer = styled.ul`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 20px 10px;
  margin: 0;
  list-style: none;

  ${media.tablet`
    padding: 25px 20px;
  `}
`;

export const ProgressBar = styled.li<ProgressBarProps>`
  position: relative;
  width: 20px;
  height: 3px;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.secondary};
  overflow: hidden;
  transition: width .1s linear;

  &:not(:last-child) {
    margin-right: 5px;
  }

  ${media.tablet`
    width: 40px;
    height: 6px;
    cursor: pointer;
  `}
  
  ${(props) => props.isActive && css`
    width: 30px;

    ${media.tablet`
      width: 55px;
    `}
  `}
`;

type ProgressBarProps = {
  isActive: boolean;
}

export const ProgressSlider = styled.div.attrs<ProgressSliderProps>((props) => ({
  style: {
    transform: props.isDone
      ? 'scaleX(1)'
      : props.isActive
        ? `scaleX(${props.progress})`
        : 'scaleX(0)',
  },
}))<ProgressSliderProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  background-color: ${(props) => props.theme.color.primary};
  transform-origin: left;
`;

type ProgressSliderProps = {
  progress: i.Percentage;
  isActive: boolean;
  isDone: boolean;
}
