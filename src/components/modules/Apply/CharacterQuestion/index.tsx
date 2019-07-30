import * as i from 'types';
import React, { useEffect } from 'react';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { Field } from 'react-final-form';
import { DropdownInput } from 'common/form/DropdownInput';
import { useGetFirebaseImage } from 'hooks';
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
            <CharacterField name="character.level" label="Level" type="number" inputMode="numeric" pattern="[0-9]*" min="1" max="60" />
            <CharacterField name="character.server" label="Server" />
          </div>
          <div>
            <Field
              component={DropdownInput}
              name="character.race"
              label="Race"
              items={[{
                name: 'Orc',
                icon: useGetFirebaseImage('icons/races', 'Orc_Male.gif'),
              }, {
                name: 'Tauren',
                icon: useGetFirebaseImage('icons/races', 'Tauren_Male.gif'),
              }, {
                name: 'Troll',
                icon: useGetFirebaseImage('icons/races', 'Troll_Male.gif'),
              }, {
                name: 'Undead',
                icon: useGetFirebaseImage('icons/races', 'Undead_Male.gif'),
              }]}
            />
            <Field
              component={DropdownInput}
              name="character.class"
              label="Class"
              items={[{
                name: 'Druid',
                icon: useGetFirebaseImage('icons/classes/druid', 'class.jpg'),
              }, {
                name: 'Hunter',
                icon: useGetFirebaseImage('icons/classes/hunter', 'class.jpg'),
              }, {
                name: 'Mage',
                icon: useGetFirebaseImage('icons/classes/mage', 'class.jpg'),
              }, {
                name: 'Priest',
                icon: useGetFirebaseImage('icons/classes/priest', 'class.jpg'),
              }, {
                name: 'Rogue',
                icon: useGetFirebaseImage('icons/classes/rogue', 'class.jpg'),
              }, {
                name: 'Shaman',
                icon: useGetFirebaseImage('icons/classes/shaman', 'class.jpg'),
              }, {
                name: 'Warlock',
                icon: useGetFirebaseImage('icons/classes/warlock', 'class.jpg'),
              }, {
                name: 'Warrior',
                icon: useGetFirebaseImage('icons/classes/warrior', 'class.jpg'),
              }]}
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
