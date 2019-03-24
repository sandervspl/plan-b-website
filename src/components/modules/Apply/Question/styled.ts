import styled, { css } from 'styled-components';
import { media } from 'styles/utils';

export const QuestionContainer = styled.div<QuestionContainerProps>`
  display: grid;
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;

  ${(props) => props.next && css`
    opacity: 0;
  `}

  ${media.tablet`
    grid-template-columns: 50% 50%;
    padding: 100px 50px;
  `}
`;

type QuestionContainerProps = {
  next?: boolean;
}

export const QuestionContent = styled.div<QuestionProps>`
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

type QuestionProps = {
  isIntro?: boolean;
}
