import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS_SHORT, TRANSITION_TIME_MS } from 'styles/pageTransition';
import { Paragraph } from 'common';

export const QuestionContent = styled.div<QuestionProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 1;
  padding: 50px 30px;
  width: 100%;
  height: 100%;
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
    padding: 50px 0;
    width: 76%;
  `}

  ${media.veryLarge`
    padding: 15vh 50px;
  `}

  > ${Paragraph} {
    text-align: center;
    font-size: 16px;

    ${media.tablet`
      font-size: 18px;
    `}

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
  padding: 15px 35px;
  border: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.color.secondary};
  cursor: pointer;
  will-change: color;
  transition: color 500ms linear;
  overflow: hidden;
  outline: 0;

  ${media.tablet`
    padding: 20px 50px;
    font-size: 20px;

    &:hover {
    color: ${(props) => props.theme.color.secondary};

      &:before {
        transform: scaleX(1);
      }
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${(props) => props.theme.color.primary};
      transform: scaleX(0);
      transform-origin: left;
      will-change: transform;
      transition: transform 600ms cubic-bezier(0.77, 0, 0.175, 1);
    }
  `}

  span {
    position: relative;
    z-index: 1;
  }
`;
