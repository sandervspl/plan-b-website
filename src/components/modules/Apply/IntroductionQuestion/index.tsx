import * as i from 'types';
import React from 'react';
import img1 from 'images/recruitment/WoWScrnShot_060409_194034.jpg';
import img2 from 'images/recruitment/WoWScrnShot_060709_214610.jpg';
import img3 from 'images/recruitment/WoWScrnShot_060709_221845.jpg';
import { Paragraph } from 'common';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, QuestionContent, NextButton, RecruitmentContainerInner } from '../styled';
import TiltImages from '../TiltImages';

const IntroductionQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, ...props }) => (
  <RecruitmentContainerInner small>
    <TiltImages images={[img1, img2, img3]} tiltStyle={props.tiltStyle} />

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
  </RecruitmentContainerInner>
);

export default IntroductionQuestion;
