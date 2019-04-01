import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS_SHORT, TRANSITION_TIME_MS } from 'styles/pageTransition';
import { Header, Paragraph } from 'common';

export const QuestionContent = styled.div<QuestionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  width: 76%;
  opacity: 0;
  will-change: transform, opacity;
  transform: translate(0, 100%);
  transition: transform ${TRANSITION_TIME_MS}ms ${(props) => props.theme.easing.easeInOutCirc},
              opacity ${TRANSITION_TIME_MS_SHORT}ms ${(props) => props.theme.easing.easeOutCirc};

  ${(props) => props.answered && css`
    transition: transform ${TRANSITION_TIME_MS_SHORT}ms ${(props) => props.theme.easing.easeInOutCirc},
                opacity ${TRANSITION_TIME_MS_SHORT}ms ${(props) => props.theme.easing.easeOutCirc};
    transform: translate(0, -100%);
    opacity: 0;
  `}

  ${(props) => props.active && css`
    transform: translate(0, 0%);
    opacity: 1;
  `}

  ${media.tablet`
    padding: 100px 50px;
  `}

  h1 {
    margin-bottom: 5vh;
    font-size: 90px;
    line-height: 1.1;
  }

  ${Header}, ${Paragraph} {
    text-align: center;

    ${media.large`
      max-width: 75%;
    `}

    ${media.veryLarge`
      max-width: 50%;  
    `}
  }

`;

type QuestionProps = {
  answered?: boolean;
  active?: boolean;
}

export const NextButton = styled.button`
  position: relative;
  margin-top: 50px;
  padding: 20px 50px;
  border: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 20px;
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.secondary};
  cursor: pointer;
  will-change: color;
  transition: color 200ms linear;
  overflow: hidden;
  outline: 0;

  &:hover {
    color: ${(props) => props.theme.color.secondary};

    &:before {
      transform: scale(1) translate(-25%, -50%);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 250%;
    height: auto;
    padding-top: 250%;
    background: ${(props) => props.theme.color.primary};
    border-radius: 100%;
    transform: scale(0) translate(-25%, -50%);
    transform-origin: top left;
    will-change: transform;
    transition: transform 300ms ${(props) => props.theme.easing.easeInOutCirc};
  }

  span {
    position: relative;
    z-index: 1;
  }
`;