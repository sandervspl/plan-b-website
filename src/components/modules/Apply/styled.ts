import * as i from 'types';
import styled, { css } from 'styled-components';
import { Field } from 'react-final-form';
import { media } from 'styles/utils';
import { getStaticUrl } from 'services';
import bgImg from 'images/recruitment/bg.jpg?external';
import { Fullscreenpage, Header } from 'common';

export const RecruitmentContainer = styled(Fullscreenpage)`
  margin: 0 auto;
  padding: 75px 140px;
  max-width: 1280px;
  max-height: 800px;
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
    opacity: .05;
  }
`;

export const QuestionsForm = styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AnswerContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const TextInputField = styled(Field)`
  display: inline-block;
  padding: 0;
  border: 0;
  background: none;
  border-radius: 0;
  outline: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 16px;
  color: ${(props) => props.theme.color.primary.medium};

  ${(props) => props.hidden && css`
    visibility: hidden;
  `}

  ${media.tablet`
    font-size: 30px;
  `}

  &::placeholder {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const QuestionField = styled.div`
  width: 42%;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.primary};
  font-size: 30px;
  font-weight: bold;
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

export const ImagesContainer = styled.div.attrs<ImagesContainerProps>((props) => ({
  ...props.tiltStyle,
}))`
  display: grid;
  gap: 3px;
  grid-template-columns: 66% 1fr;
  grid-template-rows: 25% 25% 30% 20%;
  position: fixed;
  top: 75px;
  right: 45px;
  width: 50%;
  height: calc(100% - ${75 * 2}px);
  transition: transform 100ms;

  ${ImageContainer} {
    img {
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
`;

type ImagesContainerProps = {
  tiltStyle: i.TiltStyle;
}

export const QuestionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  top: 155px;
  height: calc(100% - 155px);
`;

export const NextButton = styled.button`
  margin-top: auto;
  background: none;
  border: 0;
  outline: 0;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: ${(props) => props.theme.font.primary};
  color: ${(props) => props.theme.color.primary};
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
    background-color: ${(props) => props.theme.color.primary};
    transition: width 400ms,
                padding-right 400ms 400ms,
                margin-left 400ms,
                background-color 300ms;
  }

  &:not(:disabled) {
    &:hover:before {
      padding-right: 20px;
      margin-left: 20px;
      width: 10px;
      transition: width 400ms 400ms, padding-right 400ms, margin-left 400ms 400ms;
    }
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.color.secondary};

    &:before {
      background-color: ${(props) => props.theme.color.secondary};
    }
  }
`;
