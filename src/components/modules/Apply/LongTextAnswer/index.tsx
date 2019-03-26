import * as i from 'types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { actions } from 'ducks/form';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { AnswerContainer } from '../styled';
import { TextAreaField } from './styled';

const LongTextAnswer: React.FC<props> = ({ active, question, ...props }) => {
  const FIELD_NAME = question.question.replace(/ /g, '_').toLowerCase();

  useEffect(() => {
    if (active) {
      props.setActiveField(FIELD_NAME as i.FieldNames);
    }
  }, [active]);

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
  setActiveField: i.SetActiveField;
};

export default connect(null, {
  setActiveField: actions.setActiveField,
})(LongTextAnswer);
