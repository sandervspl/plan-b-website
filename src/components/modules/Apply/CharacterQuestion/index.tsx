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
              label="race"
              validate={validate.required}
              items={[{
                id: 1,
                name: 'Orc',
                icon: useGetFirebaseImage('icons/races', 'Orc_Male.gif'),
              }, {
                id: 2,
                name: 'Tauren',
                icon: useGetFirebaseImage('icons/races', 'Tauren_Male.gif'),
              }, {
                id: 3,
                name: 'Troll',
                icon: useGetFirebaseImage('icons/races', 'Troll_Male.gif'),
              }, {
                id: 4,
                name: 'Undead',
                icon: useGetFirebaseImage('icons/races', 'Undead_Male.gif'),
              }]}
            />
            <Field
              component={DropdownInput}
              name="character.class"
              label="class"
              validate={validate.required}
              items={[{
                id: 7,
                name: 'Druid',
                icon: useGetFirebaseImage('icons/classes/druid', 'class.jpg'),
              }, {
                id: 3,
                name: 'Hunter',
                icon: useGetFirebaseImage('icons/classes/hunter', 'class.jpg'),
              }, {
                id: 6,
                name: 'Mage',
                icon: useGetFirebaseImage('icons/classes/mage', 'class.jpg'),
              }, {
                id: 5,
                name: 'Priest',
                icon: useGetFirebaseImage('icons/classes/priest', 'class.jpg'),
              }, {
                id: 4,
                name: 'Rogue',
                icon: useGetFirebaseImage('icons/classes/rogue', 'class.jpg'),
              }, {
                id: 2,
                name: 'Shaman',
                icon: useGetFirebaseImage('icons/classes/shaman', 'class.jpg'),
              }, {
                id: 8,
                name: 'Warlock',
                icon: useGetFirebaseImage('icons/classes/warlock', 'class.jpg'),
              }, {
                id: 1,
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
