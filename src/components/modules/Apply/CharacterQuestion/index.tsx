import * as i from 'types';
import React, { useEffect } from 'react';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import CharacterField from './CharacterField';
import { CharacterGrid } from './styled';

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
            <CharacterField name="character.level" label="Level" />
            <CharacterField name="character.server" label="Server" />
          </div>
          <div>
            <CharacterField name="character.race" label="Race" />
            <CharacterField name="character.class" label="Class" />
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
