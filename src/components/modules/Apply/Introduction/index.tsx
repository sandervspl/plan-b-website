import * as i from 'types';
import React from 'react';
import { Paragraph } from 'common';
import { NextButton } from '../Question/styled';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader } from '../styled';
import { IntroductionContainer } from './styled';
import IntroductionImages from './Images';

const Introduction: React.FC<i.QuestionComponentProps> = ({ onNextClick }) => (
  <IntroductionContainer>
    <IntroductionImages />

    <QuestionHeader>
      Hi there, adventurer!
    </QuestionHeader>
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
  </IntroductionContainer>
);

export default Introduction;
