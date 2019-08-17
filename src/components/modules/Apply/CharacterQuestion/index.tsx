import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import { useGetFirebaseImage } from 'hooks';
import { DropdownInput } from 'common/form/DropdownInput';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import CharacterField from './CharacterField';
import { CharacterGrid } from './styled';
import dropdownRaces from './dropdownRaces';
import dropdownClasses from './dropdownClasses';

const CharacterQuestion: React.FC<Props> = ({ onNextClick, errors, inputTabIndex }) => {
  return (
    <>
      <QuestionHeader>
        Your character
      </QuestionHeader>

      <QuestionContent>
        <CharacterGrid>
          <div>
            <CharacterField name="character.name" label="Character name" tabIndex={inputTabIndex} />
            <CharacterField
              name="character.level"
              label="Level"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min="1"
              max="60"
              tabIndex={inputTabIndex}
              disabled
            />
            <CharacterField
              name="character.server"
              label="Server"
              tabIndex={inputTabIndex}
              disabled
            />
          </div>
          <div>
            <Field
              component={DropdownInput}
              name="character.race"
              label="race"
              validate={validate.required}
              items={dropdownRaces(useGetFirebaseImage)}
              tabIndex={inputTabIndex}
            />
            <Field
              component={DropdownInput}
              name="character.class"
              label="class"
              validate={validate.required}
              items={dropdownClasses(useGetFirebaseImage)}
              tabIndex={inputTabIndex}
            />
          </div>
        </CharacterGrid>

        <NextButton onClick={onNextClick} tabIndex={inputTabIndex} disabled={!!errors.character}>
          <span tabIndex={-1}>Continue</span>
        </NextButton>
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterQuestion;
