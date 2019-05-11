import * as i from 'types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FieldArray } from 'react-final-form-arrays';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import FakeInput from 'common/FakeInput';
import QuestionHeader from '../QuestionHeader';
import { QuestionContent, NextButton, RecruitmentContainerInner, QuestionField, TextInputField } from '../styled';

const questions = [
  'Hello! My name is ',
  {
    name: 'name',
    placeholder: 'real name',
    maxLength: 20,
    type: 'string',
  },
  ', I am ',
  {
    name: 'age',
    placeholder: 'age',
    maxLength: 3,
    type: 'number',
  },
  ' years old.',
];

const AboutYouQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, active }) => {
  const form: i.ReduxFormState = useSelector((state: i.ReduxState) => state.form);
  const questionsAmount = 1 + questions.filter((qstn) => typeof qstn === 'object').length;
  const answerAmount = form.application && form.application.values.about_applicant
    ? Object.values(form.application.values.about_applicant).length
    : 0;

  /** @todo turn into hook */
  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#fake-about_applicant\\.name');

      if (el) {
        el.focus();
      }
    }, TRANSITION_TIME_MS);
  }, [active]);

  return (
    <RecruitmentContainerInner>
      <QuestionHeader>
       Tell us about yourself
      </QuestionHeader>

      <QuestionContent>
        <FieldArray name="about_applicant">
          {({ fields }) => (
            <QuestionField fullSize>
              {questions.map((item) => {
                if (typeof item === 'string') {
                  return item;
                }

                return (
                  <FakeInput
                    key={item.name}
                    fieldArrayName={fields.name}
                    fieldName={item.name}
                    placeholder={item.placeholder}
                    maxLength={item.maxLength}
                    type={item.type as 'string' | 'number'}
                  />
                );
              })}

              <br />

              <TextInputField
                component="textarea"
                id={`${fields.name}.story`}
                name={`${fields.name}.story`}
                placeholder="My story..."
                tabIndex={-1}
              />
            </QuestionField>
          )}
        </FieldArray>

        <NextButton onClick={onNextClick} disabled={questionsAmount !== answerAmount}>
          <span>Finish</span>
        </NextButton>
      </QuestionContent>
    </RecruitmentContainerInner>
  );
};

export default AboutYouQuestion;
