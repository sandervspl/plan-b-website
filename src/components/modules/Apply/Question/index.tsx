import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { Header, Paragraph } from 'common';
import Button from '../Button';
import FadedBackgroundImage from '../BackgroundImage';
import ArmorySelect from '../ArmorySelectAnswer';
import SpecializationSelect from '../SpecializationSelectAnswer';
import LongTextAnswer from '../LongTextAnswer';
import { QuestionContent } from './styled';
// import { AnswerComponents } from './types';

const Question: React.FC<props> = ({
  isIntro, onNextClick, noButton, loading, active, answered, image, mutators, Component, ...props
}) => {
  // const FormFieldComponent = question && renderAnswerComponents[question.answer_type];

  return (
    <>
      <FadedBackgroundImage next image={image} active={active} />
      <QuestionContent active={active} answered={answered}>
        <Component {...props} />
        {/* <Left isIntro={isIntro}>
        {question.question && (
          <Header>
            {question.question}
          </Header>
        )}

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
        </Right> */}
      </QuestionContent>
    </>
  );
};

export type props = {
  isIntro?: boolean;
  question?: i.RecruitmentQuestionDetail;
  data?: {
    title?: string;
    text?: string;
  } | i.RecruitmentQuestionDetail;
  image?: i.Image;
  answered?: boolean;
  active?: boolean;
  onNextClick?: () => void;
  loading: boolean;
  mutators?: { [key: string]: () => void };
  noButton?: boolean;
  setActiveField?: i.SetActiveField;
  Component: React.ComponentType<any>;
};

export default Question;
