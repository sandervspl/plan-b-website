import * as i from 'types';
import React from 'react';
import { Paragraph } from 'common';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, NextButton } from '../styled';
import { IntroductionContainer } from './styled';
import IntroductionImages from './Images';

const IntroductionQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, ...props }) => (
  <IntroductionContainer>
    <IntroductionImages tiltStyle={props.tiltStyle} />

    <QuestionHeader>
      Hi there, adventurer!
    </QuestionHeader>

    <QuestionContent>
      <QuestionContentHeader>
        Thank you for your interest in Plan B.
      </QuestionContentHeader>

      <Paragraph>
      Before we welcome you to our guild, we would like to ask you a few questions so we can get a
      quick idea about who you are.
      Take your time to fill in these questions and we might get back to you in-game!
      </Paragraph>

      <NextButton onClick={onNextClick}>
        <span>Start</span>
      </NextButton>
    </QuestionContent>
  </IntroductionContainer>
);

export default IntroductionQuestion;
