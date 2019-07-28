import * as i from 'types';
import React, { useEffect } from 'react';
import { FieldArray } from 'react-final-form-arrays';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import { CharacterGrid } from './styled';
import CharacterField from './CharacterField';

const CharacterQuestion: React.FC<Props> = ({ onNextClick, active, errors }) => {
  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#character_name');

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
            <FieldArray name="character">
              {({ fields }) => (
                <>
                  <CharacterField name={`${fields.name}.name`} label="Character name" />
                  <CharacterField name={`${fields.name}.level`} label="Level" />
                  <CharacterField name={`${fields.name}.server`} label="Server" />
                </>
              )}
            </FieldArray>
          </div>
          <div>
            <FieldArray name="character">
              {({ fields }) => (
                <>
                  <CharacterField name={`${fields.name}.race`} label="Race" />
                  <CharacterField name={`${fields.name}.class`} label="Class" />
                </>
              )}
            </FieldArray>
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
