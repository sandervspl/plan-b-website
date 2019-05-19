import * as i from 'types';
import styled, { css } from 'styled-components';
import { Field } from 'react-final-form';
import { media } from 'styles/utils';
import { getStaticUrl } from 'services';
import bgImg from 'images/recruitment/bg.jpg?external';
import { Fullscreenpage, Header, Paragraph } from 'common';

export const RecruitmentContainer = styled(Fullscreenpage)`
  margin: auto;
  padding: 40px 30px;
  overflow: hidden;

  &:before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: url(${getStaticUrl(bgImg)}) center center;
    background-size: cover;
    opacity: .065;
  }

  ${media.tablet`
    padding: 75px 140px;
    max-width: 1280px;
    max-height: 800px;
  `}
`;

export const QuestionContentHeader = styled(Header)`
  margin-bottom: 10px;
  text-transform: none;

  ${media.tablet`
    font-size: 30px;
  `}
`;

export const RecruitmentContainerInner = styled.div<RecruitmentContainerInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;

  ${(props) => props.small && css`
    max-width: 445px;
  `}

  ${QuestionContentHeader} {
    font-size: 20px;

    ${media.tablet`
      font-size: 30px;
    `}
  }

  ${Paragraph} {
    font-size: 16px;

    ${media.tablet`
      font-size: 18px;
    `}
  }

  textarea {
    margin-top: 10px;
    height: 200px;
    width: 100%;
    overflow-y: scroll;
    resize: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

type RecruitmentContainerInnerProps = {
  small?: boolean;
}

export const QuestionsForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextInputField = styled(Field)`
  position: relative;
  display: inline-block;
  padding: 0;
  border: 0;
  min-width: 16px;
  background: none;
  border-radius: 0;
  outline: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  color: ${(props) => props.theme.color.__OLD__.tertiary};
  overflow: hidden;
  vertical-align: bottom;

  ${(props) => props.hidden && css`
    visibility: hidden;
  `}

  ${media.tablet`
    min-width: 30px;
    font-size: 30px;
  `}

  &::placeholder {
    color: ${(props) => props.theme.color.__OLD__.primary.dark};
  }
`;

export const QuestionField = styled.div<QuestionFieldProps>`
  width: 100%;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.color.__OLD__.primary};
  font-weight: bold;

  input {
    line-height: 1.5;
  }

  ${media.tablet<QuestionFieldProps>`
    width: 42%;
    font-size: 30px;
    line-height: 1.1;

    input {
      line-height: 1.1;
    }

    ${(props) => props.fullSize && css`
      width: 100%;
    `}
  `}

`;

type QuestionFieldProps = {
  fullSize?: boolean;
}

export const Label = styled.label`
  width: 100%;

  span {
    display: block;
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.font.primary};
    font-size: 16px;
    color: ${(props) => props.theme.color.__OLD__.paragraph};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const ImagesContainer = styled.div.attrs<ImagesContainerProps>((props) => (props.tiltStyle))`
  display: none;

  ${media.tablet`
    display: grid;
    gap: 3px;
    grid-template-columns: 66% 1fr;
    grid-template-rows: 25% 25% 30% 20%;
    position: fixed;
    top: 75px;
    right: 45px;
    width: 50%;
    height: calc(100% - ${75 * 2}px);

    ${ImageContainer} {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:nth-child(1) {
        grid-column: 1;
        grid-row: 1 / span 2;
        height: 100%;
      }

      &:nth-child(2) {
        grid-column: 1;
        grid-row: 3;
        height: 100%;
      }
      
      &:nth-child(3) {
        grid-column: 2;
        grid-row: 2 / span 3;
        height: 100%;
      }
    }
  `}
`;

type ImagesContainerProps = {
  tiltStyle: i.TiltStyle;
}

export const QuestionContent = styled.div<QuestionContentProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: 100px;
  height: calc(100% - 150px);

  ${media.tablet<QuestionContentProps>`
    top: 155px;
    height: calc(100% - 155px);

    ${(props) => props.fullSize && css`
      top: 0;
      height: 100%;
    `}
  `}

`;

type QuestionContentProps = {
  fullSize?: boolean;
}

export const NextButton = styled.button.attrs({ type: 'button' })`
  position: relative;
  z-index: 1;
  margin-top: auto;
  background: none;
  border: 0;
  outline: 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.__OLD__.primary};
  cursor: pointer;
  transition: color 300ms;

  &:before {
    content: '';
    position: relative;
    bottom: 0.3em;
    display: inline-block;
    margin-right: 12px;
    width: 30px;
    height: 2px;
    background-color: ${(props) => props.theme.color.__OLD__.primary};
    transition: width 400ms,
                padding-right 400ms 400ms,
                margin-left 400ms,
                background-color 300ms;
  }

  ${media.tablet`
    &:not(:disabled) {
      &:hover:before {
        padding-right: 20px;
        margin-left: 20px;
        width: 10px;
        transition: width 400ms 400ms, padding-right 400ms, margin-left 400ms 400ms;
      }
    }
  `}

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.color.__OLD__.secondary};

    &:before {
      background-color: ${(props) => props.theme.color.__OLD__.secondary};
    }
  }
`;
