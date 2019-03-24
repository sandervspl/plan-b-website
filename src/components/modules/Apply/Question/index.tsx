import React from 'react';
import { Header, Paragraph } from 'common';
import Button from '../Button';
import { QuestionContainer, QuestionContent } from './styled';

const Question: React.FC<props> = ({
  containerRef, isIntro, question, next, onNextClick, loading,
}) => (
  <QuestionContainer ref={containerRef} next={next}>
    <QuestionContent isIntro={isIntro}>
      <Header>{question && question.title}</Header>
      <Paragraph>{question && question.text}</Paragraph>
      <Button onClick={onNextClick} disabled={loading}>
        {isIntro ? 'Get started' : 'Next question'}
      </Button>
    </QuestionContent>
  </QuestionContainer>
);

export type props = {
  containerRef: React.MutableRefObject<null>;
  isIntro?: boolean;
  question: {
    title?: string;
    text?: string;
  };
  next?: boolean;
  onNextClick?: () => void;
  loading: boolean;
};

export default Question;
