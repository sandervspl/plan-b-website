import styled, { css } from 'styled-components';
import { Field } from 'react-final-form';
import { media } from 'styles/utils';
import { Fullscreenpage, Header, HeaderProps } from 'common';

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
  width: 100%;
  border: 0;
  background: none;
  border-bottom: 1px solid ${(props) => props.theme.color.primary};
  outline: 0;
  font-family: ${(props) => props.theme.font.primary};
  font-size: 30px;
  color: ${(props) => props.theme.color.primary};

  ${(props) => props.hidden && css`
    visibility: hidden;
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

export const RecruitmentHeader = styled(Header)`
  margin-bottom: 5vh;
  text-align: center;

  ${media.tablet<HeaderProps>`
    line-height: 1.1;

    ${(props) => props.as === 'h1' && css`
      font-size: 90px;
    `}

    ${(props) => props.as === 'h2' && css`
      font-size: 70px;
    `}
  `}
`;
