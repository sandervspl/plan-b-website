import styled, { css } from 'styled-components';
import { Field } from 'react-final-form';
import { media } from 'styles/utils';
import { Fullscreenpage, Header } from 'common';

export const RecruitmentContainer = styled(Fullscreenpage)`
  overflow: hidden;
`;

export const QuestionsForm = styled.form`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextField = styled(Field)`
  padding: 0;
  width: 100%;
  border: 0;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 0;
  outline: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: ${(props) => props.theme.color.primary};

  ${(props) => props.hidden && css`
    visibility: hidden;
  `}

  ${media.tablet`
    font-size: 30px;
  `}
`;

export const Label = styled.label`
  width: 100%;

  span {
    display: block;
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: ${(props) => props.theme.color.paragraph};
  }
`;

export const QuestionContentHeader = styled(Header).attrs({ as: 'h2' })`
  margin-bottom: 10px;
  text-transform: none;

  ${media.tablet`
    font-size: 30px;
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 20px);
  grid-template-rows: repeat(40, 20px);
  gap: 2px;
  position: absolute;
  top: -58px;
  right: 0;
  transform: translateX(75%);
  object-fit: cover;

  ${ImageContainer} {
    img {
      height: 100%;
    }

    &:nth-child(1) {
      grid-column: 1 / span 5;
      grid-row: 1 / span 11;
    }

    &:nth-child(2) {
      grid-column: 6 / span 5;
      grid-row: 1 / span 11;
    }

    &:nth-child(3) {
      grid-column: 1 / span 14;
      grid-row: 12 / span 11;
    }

    &:nth-child(4) {
      grid-column: 15 / span 5;
      grid-row: 12 / span 11;
    }
  }
`;

// export const RecruitmentHeader = styled(Header)`
//   position: absolute;
//   margin-bottom: 5vh;
//   text-align: center;

//   ${(props) => props.as === 'h1' && css`
//     font-size: 35px;
//   `}

//   ${media.tablet<HeaderProps>`
//     line-height: 1.1;

//     ${(props) => props.as === 'h1' && css`
//       font-size: 90px;
//     `}

//     ${(props) => props.as === 'h2' && css`
//       font-size: 70px;
//     `}
//   `}
// `;
