import * as i from 'types';
import React from 'react';
import { Header, Paragraph } from 'common';
import { Field } from 'react-final-form';
import Button from '../Button';
import FadedBackgroundImage from '../BackgroundImage';
import ArmorySelect from '../ArmorySelectAnswer';
import { QuestionContent, Left, Right } from './styled';

/* eslint-disable @typescript-eslint/camelcase */
const renderAnswerComponents: { [key in i.AnswerType]: React.ComponentType<any> } = {
  armory_select: ArmorySelect,
  text: Field,
  long_text: Field,
};
/* eslint-enable */

const Question: React.FC<props> = ({
  isIntro, question, intro, onNextClick, noButton, loading, active, answered, image, mutators,
}) => {
  const FormFieldComponent = question
    ? renderAnswerComponents[question.answer_type]
    : () => null;

  return (
    <>
      <FadedBackgroundImage next image={image} active={active} />
      <QuestionContent active={active} answered={answered}>
        <Left isIntro={isIntro}>
          <Header>{(intro && intro.title) || (question && question.question)}</Header>
          {intro && <Paragraph>{intro.text}</Paragraph>}
          {!noButton && onNextClick && (
            <Button onClick={onNextClick} disabled={loading}>
              {isIntro ? 'Get started' : 'Next question'}
            </Button>
          )}
        </Left>
        <Right>
          {!isIntro && question && (
            <FormFieldComponent
              question={question}
              component="input"
              form="application"
              mutators={mutators}
              active={active}
              onNextClick={onNextClick}
            />
          )}
        </Right>
      </QuestionContent>
    </>
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
  mutators?: { [key: string]: () => void };
  noButton?: boolean;
};

export default Question;
