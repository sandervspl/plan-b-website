import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { Header, Paragraph } from 'common';
import Button from '../Button';
import FadedBackgroundImage from '../BackgroundImage';
import ArmorySelect from '../ArmorySelectAnswer';
import SpecializationSelect from '../SpecializationSelectAnswer';
import LongTextAnswer from '../LongTextAnswer';
import { QuestionContent, Left, Right } from './styled';
import { AnswerComponents } from './types';

/* eslint-disable @typescript-eslint/camelcase */
const renderAnswerComponents: AnswerComponents = {
  armory_select: ArmorySelect,
  text: Field,
  long_text: LongTextAnswer,
  list_select: SpecializationSelect,
};
/* eslint-enable */

const Question: React.FC<props> = ({
  isIntro, question, intro, onNextClick, noButton, loading, active, answered, image, mutators,
}) => {
  const FormFieldComponent = question && renderAnswerComponents[question.answer_type];

  return (
    <>
      <FadedBackgroundImage next image={image} active={active} />
      <QuestionContent active={active} answered={answered}>
        <Left isIntro={isIntro}>
          <Header>
            {(intro && intro.title) || (question && question.question)}
          </Header>

          {intro && (
            <Paragraph>
              {intro.text}
            </Paragraph>
          )}

          {!noButton && onNextClick && (
            <Button
              onClick={onNextClick}
              disabled={loading}
              tabIndex={-1}
            >
              {isIntro ? 'Get started' : 'Next question'}
            </Button>
          )}
        </Left>
        <Right>
          {!isIntro && question && FormFieldComponent && (
            <FormFieldComponent
              question={question}
              component="input"
              form="application"
              mutators={mutators}
              active={active}
              onNextClick={onNextClick}
              tabIndex={-1}
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
  setActiveField?: i.SetActiveField;
};

export default Question;
