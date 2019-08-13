import * as i from 'types';
import React from 'react';
import QuestionHeader from '../QuestionHeader';
import { QuestionContent, NextButton, RecruitmentContainerInner } from '../styled';
import CharacterField from '../CharacterQuestion/CharacterField';
import { PersonalGrid } from './styled';

const AboutYouQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, errors, inputTabIndex }) => {
  const ageValidate = (value: string) => {
    const numVal = Number(value);

    if (isNaN(numVal) || numVal < 1 || numVal > 99) {
      return 'Age should be between 1 and 99.';
    }

    return undefined;
  };

  return (
    <RecruitmentContainerInner>
      <QuestionHeader>
       Tell us about yourself
      </QuestionHeader>

      <QuestionContent>
        <PersonalGrid>
          <div>
            <CharacterField name="personal.name" label="My name is" tabIndex={inputTabIndex} />
            <CharacterField
              name="personal.age"
              label="My age is"
              type="number"
              validate={ageValidate}
              tabIndex={inputTabIndex}
            />
          </div>

          <div>
            <CharacterField
              as="textarea"
              name="personal.story"
              label="Tell us about yourself"
              tabIndex={inputTabIndex}
            />
            <CharacterField
              name="personal.reason"
              label="I want to join Plan B, because"
              as="textarea"
              tabIndex={inputTabIndex}
            />
          </div>
        </PersonalGrid>

        <NextButton onClick={onNextClick} tabIndex={inputTabIndex} disabled={!!errors.personal}>
          <span>Finish</span>
        </NextButton>
      </QuestionContent>
    </RecruitmentContainerInner>
  );
};

export default AboutYouQuestion;
