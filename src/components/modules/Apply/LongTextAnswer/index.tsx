import * as i from 'types';
import React, { useEffect } from 'react';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { AnswerContainer } from '../styled';
import { TextAreaField } from './styled';

const LongTextAnswer: React.FC<props> = ({ active, question }) => {
  const FIELD_NAME = question.question.replace(/ /g, '_').toLowerCase();

  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>(`[name='${FIELD_NAME}']`);

      if (el) el.focus();
    }, TRANSITION_TIME_MS);
  }, [active]);

  return (
    <AnswerContainer>
      <TextAreaField
        name={FIELD_NAME}
        component="textarea"
        type="text"
        tabIndex={-1}
      />
    </AnswerContainer>
  );
};

export type props = {
  active?: boolean;
  question: i.RecruitmentQuestionDetail;
};

export default LongTextAnswer;
