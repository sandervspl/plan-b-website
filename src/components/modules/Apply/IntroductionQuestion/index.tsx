import * as i from 'types';
import React from 'react';
import { getUploadsUrl } from 'services';
import { Paragraph } from 'common';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, NextButton, RecruitmentContainerInner,
} from '../styled';
import TiltImages from '../TiltImages';

const images = [
  `${getUploadsUrl('recruitment_imgs/intro_top-left.jpg')}`,
  `${getUploadsUrl('recruitment_imgs/intro_bottom-left.jpg')}`,
  `${getUploadsUrl('recruitment_imgs/intro_right.jpg')}`,
];

const IntroductionQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, ...props }) => (
  <RecruitmentContainerInner small>
    <TiltImages images={images} tiltStyle={props.tiltStyle} />

    <QuestionHeader>
      Hi there, adventurer!
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
  </RecruitmentContainerInner>
);

export default IntroductionQuestion;
