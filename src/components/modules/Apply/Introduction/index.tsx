import * as i from 'types';
import React from 'react';
import { Header, Paragraph } from 'common';
import { NextButton } from '../Question/styled';

const Introduction: React.FC<i.QuestionComponentProps> = ({ onNextClick }) => (
  <>
    <Header>
      Hi there adventurer!
    </Header>
    <Paragraph>
      Thank you for your interest in Plan B. Before we welcome you to our guild, we would like to ask you a few questions so we can get a quick idea who you are. Take your time to fill in these questions and we might get back to you in-game!
    </Paragraph>
    <NextButton onClick={onNextClick}>
      <span>Get Started!</span>
    </NextButton>
  </>
);

export default Introduction;
