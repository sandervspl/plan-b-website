import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { Header, Paragraph } from 'common';
import Button from '../Button';
import FadedBackgroundImage from '../BackgroundImage';
import { QuestionContainer, QuestionContent, Left, Right } from './styled';

const Question: React.FC<props> = ({
  isIntro, question, intro, onNextClick, loading, active, answered, image,
}) => {
  return (
    <QuestionContainer>
      <FadedBackgroundImage next image={image} active={active} />
      <QuestionContent active={active} answered={answered}>
        <Left isIntro={isIntro}>
          <Header>{(intro && intro.title) || (question && question.question)}</Header>
          {intro && <Paragraph>{intro.text}</Paragraph>}
          {onNextClick && (
            <Button onClick={onNextClick} disabled={loading}>
              {isIntro ? 'Get started' : 'Next question'}
            </Button>
          )}
        </Left>
        <Right>
          {!isIntro && question && (
            <Field
              name={question.question.replace(/ /g, '_').toLowerCase()}
              component="input"
              type="text"
              placeholder="TODO placeholder"

            />
          )}
        </Right>
      </QuestionContent>
    </QuestionContainer>
  );
};

export type props = {
  isIntro?: boolean;
  question?: i.RecruitmentQuestionDetail;
  intro?: {
    title?: string;
    text?: string;
  };
  image?: i.Image;
  answered?: boolean;
  active?: boolean;
  onNextClick?: () => void;
  loading: boolean;
};

export default Question;
