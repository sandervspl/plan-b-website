import styled, { css } from 'styled-components';
import { TRANSITION_TIME_QUESTION_MS, TRANSITION_TIME_QUESTION_MS_SHORT } from 'styles/pageTransition';

export const QuestionContainer = styled.div<QuestionContainerProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: translate3d(-100%, 0, 0);
  opacity: 0;
  transition: transform ${TRANSITION_TIME_QUESTION_MS}ms ${(props) => props.theme.easing.easeInOutCirc},
              opacity ${TRANSITION_TIME_QUESTION_MS_SHORT}ms ${(props) => props.theme.easing.easeInOutCirc};

  ${(props) => props.active && css`
    transform: translate3d(0, 0, 0);
    opacity: 1;
    transition: transform ${TRANSITION_TIME_QUESTION_MS}ms ${TRANSITION_TIME_QUESTION_MS_SHORT}ms ${(props) => props.theme.easing.easeInOutCirc},
                opacity ${TRANSITION_TIME_QUESTION_MS_SHORT}ms ${TRANSITION_TIME_QUESTION_MS}ms ${(props) => props.theme.easing.easeInOutCirc};
  `}

  ${(props) => props.answered && css`
    transform: translate3d(100%, 0, 0);
    opacity: 0;
  `}
`;

type QuestionContainerProps = {
  answered?: boolean;
  active?: boolean;
}
