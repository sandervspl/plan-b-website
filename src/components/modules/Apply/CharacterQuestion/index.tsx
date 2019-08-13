import * as i from 'types';
import React, { useEffect } from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import { useGetFirebaseImage } from 'hooks';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { DropdownInput } from 'common/form/DropdownInput';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import CharacterField from './CharacterField';
import { CharacterGrid } from './styled';
import dropdownRaces from './dropdownRaces';
import dropdownClasses from './dropdownClasses';

const CharacterQuestion: React.FC<Props> = ({ onNextClick, active, errors }) => {
  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#character.name');

      if (el) {
        el.focus();
      }
    }, TRANSITION_TIME_MS);
  }, [active]);

  return (
    <>
      <QuestionHeader>
        Your character
      </QuestionHeader>

      <QuestionContent>
        <CharacterGrid>
          <div>
            <CharacterField name="character.name" label="Character name" />
            <CharacterField
              name="character.level"
              label="Level"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min="1"
              max="60"
              disabled
            />
            <CharacterField name="character.server" label="Server" disabled />
          </div>
          <div>
            <Field
              component={DropdownInput}
              name="character.race"
              label="race"
              validate={validate.required}
              items={dropdownRaces(useGetFirebaseImage)}
            />
            <Field
              component={DropdownInput}
              name="character.class"
              label="class"
              validate={validate.required}
              items={dropdownClasses(useGetFirebaseImage)}
            />
          </div>
        </CharacterGrid>

        <NextButton onClick={onNextClick} disabled={!!errors.character}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterQuestion;
