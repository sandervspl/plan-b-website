import * as i from 'types';
import React from 'react';
import { useGetFirebaseImage } from 'hooks';
import { Paragraph } from 'common';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, NextButton, RecruitmentContainerInner,
} from '../styled';
import { IntroGrid } from './styled';

const IntroductionQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick }) => {
  const introImg = useGetFirebaseImage('recruitment', 'intro_fade_2.jpg');

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

            <NextButton onClick={onNextClick}>
              <span>Start</span>
            </NextButton>
          </QuestionContent>
        </div>

        <div>
          <img src={introImg} alt="" />
        </div>
      </IntroGrid>
    </RecruitmentContainerInner>
  );
};

export default IntroductionQuestion;
