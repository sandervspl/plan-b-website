import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { Paragraph } from 'common';
import { Toggle } from 'common/form';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, NextButton, RecruitmentContainerInner,
} from '../styled';
import { IntroGrid } from './styled';

const IntroductionQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, inputTabIndex }) => {
  return (
    <RecruitmentContainerInner>
      <IntroGrid>
        <div>
          <QuestionHeader>
            Hi there!
          </QuestionHeader>

          <QuestionContent>
            <QuestionContentHeader as="h2">
              Thank you for your interest in Plan B.
            </QuestionContentHeader>

            <Paragraph>
              Before we welcome you to our guild, we would like to ask you a few questions so we can get a
              quick idea about who you are.
              Take your time to fill in these questions and we might get back to you in-game!
            </Paragraph>

            <Field
              component={Toggle}
              type="checkbox"
              name="social"
              label="I'm applying to become a social member"
            />

            <NextButton onClick={onNextClick} tabIndex={inputTabIndex}>
              <span tabIndex={-1}>Start</span>
            </NextButton>
          </QuestionContent>
        </div>
      </IntroGrid>
    </RecruitmentContainerInner>
  );
};

export default IntroductionQuestion;
