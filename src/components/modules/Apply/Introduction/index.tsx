import * as i from 'types';
import React from 'react';
import img1 from 'images/recruitment/WoWScrnShot_060409_194034.jpg';
import img2 from 'images/recruitment/WoWScrnShot_060509_204812.jpg';
import img3 from 'images/recruitment/WoWScrnShot_060709_214610.jpg';
import img4 from 'images/recruitment/WoWScrnShot_060709_221845.jpg';
import { getStaticUrl } from 'services';
import { Paragraph } from 'common';
import { NextButton } from '../Question/styled';
import QuestionHeader from '../QuestionHeader';
import { QuestionContentHeader, ImagesContainer, ImageContainer } from '../styled';
import { IntroductionContainer } from './styled';

const Introduction: React.FC<i.QuestionComponentProps> = ({ onNextClick }) => (
  <IntroductionContainer>
    <ImagesContainer>
      <ImageContainer>
        <img src={getStaticUrl(img1)} />
      </ImageContainer>
      <ImageContainer>
        <img src={getStaticUrl(img2)} />
      </ImageContainer>
      <ImageContainer>
        <img src={getStaticUrl(img3)} />
      </ImageContainer>
      <ImageContainer>
        <img src={getStaticUrl(img4)} />
      </ImageContainer>
    </ImagesContainer>
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
