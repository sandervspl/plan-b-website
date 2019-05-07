import * as i from 'types';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FieldArray } from 'react-final-form-arrays';
import { FieldRenderProps } from 'react-final-form';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import QuestionHeader from '../QuestionHeader';
import {
  QuestionContent, NextButton, RecruitmentContainerInner, QuestionField, TextInputField,
} from '../styled';
import { Placeholder, FakeInputFieldContainer, FakeInputField } from './styled';

const story = [
  'Hello! My name is ',
  {
    name: 'name',
    placeholder: 'real name',
  },
  ', I am ',
  {
    name: 'age',
    placeholder: 'age',
  },
  ' years old. ',
  {
    name: 'story',
    placeholder: 'My story...',
  },
];

const AboutYouQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, active }) => {
  const form: i.ReduxFormState = useSelector((state: i.ReduxState) => state.form);
  const questionsAmount = story.filter((qstn) => typeof qstn === 'object').length;
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

  const handleOnInput: HandleOnInput = (input) => (e) => {
    input.onChange(e.currentTarget.textContent || '');
  };

  return (
    <RecruitmentContainerInner>
      <QuestionHeader>
       Tell us about yourself
      </QuestionHeader>

      <QuestionContent>
        <FieldArray name="about_applicant">
          {({ fields }) => (
            <QuestionField fullSize>
              {story.map((item) => {
                if (typeof item === 'string') {
                  return item;
                }

                return (
                  <TextInputField
                    key={item.name}
                    id={`${fields.name}.${item.name}`}
                    name={`${fields.name}.${item.name}`}
                    placeholder={item.placeholder}
                    tabIndex={-1}
                    render={({ input }: FieldRenderProps<HTMLSpanElement>) => (
                      <FakeInputFieldContainer>
                        <FakeInputField
                          as="span"
                          contentEditable
                          onInput={handleOnInput(input)}
                          hasInput={!!input.value}
                          id={`fake-${fields.name}.${item.name}`}
                        />
                        <Placeholder
                          visible={!input.value}
                          onClick={() => {
                            // Set focus on FakeInputField on click
                            const el = document.querySelector<HTMLSpanElement>(
                              `#fake-${fields.name}\\.${item.name}`
                            );

                            if (el) {
                              el.focus();
                            }
                          }}
                        >
                          {item.placeholder}
                        </Placeholder>
                      </FakeInputFieldContainer>
                    )}
                  />
                );
              })}
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandleOnInput = (input) => (e: any) => void;

export default AboutYouQuestion;
