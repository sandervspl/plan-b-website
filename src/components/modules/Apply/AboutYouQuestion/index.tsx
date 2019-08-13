import * as i from 'types';
import React from 'react';
import QuestionHeader from '../QuestionHeader';
import { QuestionContent, NextButton, RecruitmentContainerInner } from '../styled';
import CharacterField from '../CharacterQuestion/CharacterField';
import { PersonalGrid } from './styled';

const AboutYouQuestion: React.FC<i.QuestionComponentProps> = ({ onNextClick, errors }) => {
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
            <CharacterField name="personal.name" label="My name is" />
            <CharacterField
              name="personal.age"
              label="My age is"
              type="number"
              validate={ageValidate}
            />
          </div>

          <div>
            <CharacterField name="personal.story" label="Tell us about yourself" as="textarea" />
            <CharacterField
              name="personal.reason"
              label="I want to join Plan B, because"
              as="textarea"
            />
          </div>
        </PersonalGrid>

        <NextButton onClick={onNextClick} disabled={!!errors.personal}>
          <span>Finish</span>
        </NextButton>
      </QuestionContent>
    </RecruitmentContainerInner>
  );
};

export default AboutYouQuestion;
