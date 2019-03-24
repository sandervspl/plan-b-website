import styled, { css } from 'styled-components';
import { media } from 'styles/utils';
import { TRANSITION_TIME_MS_SHORT, TRANSITION_TIME_MS } from 'styles/pageTransition';

export const QuestionContainer = styled.div``;

export const QuestionContent = styled.div<QuestionProps>`
  display: grid;
  position: absolute;
  z-index: 1;
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
    grid-template-columns: 50% 50%;
    padding: 100px 50px;
  `}
`;

type QuestionProps = {
  answered?: boolean;
  active?: boolean;
}

export const Left = styled.div<LeftProps>`
  grid-column: 1 / 1;

  ${(props) => props.isIntro && css`
    grid-column: 2;
  `}

  h1 {
    margin-bottom: 20px;

    ${media.tablet`
      margin-bottom: 40px;
    `}
  }
`;

type LeftProps = {
  isIntro?: boolean;
}

export const Right = styled.div`
  grid-column: 2;
`;
