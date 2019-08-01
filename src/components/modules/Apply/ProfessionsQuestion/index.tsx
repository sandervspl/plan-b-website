import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { useGetFirebaseImage, useDispatch, useSelector } from 'hooks';
import { fetchProfessions } from 'ducks/character';
import { Button, Heading } from 'common';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import ProfessionInput from '../ProfessionInput';
import { ProfessionsGrid } from './styled';

const CharacterQuestion: React.FC<Props> = ({ onNextClick }) => {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.character.professions);
  const [primaries, setPrimaries] = useState<string[]>([]);
  const [secondaries, setSecondaries] = useState<string[]>([]);
  const primaryFieldName = 'professions.primary';
  const secondaryFieldName = 'professions.secondary';

  useEffect(() => {
    dispatch(fetchProfessions());
  }, []);

  console.log(professions);

  const icons = {
    // Primary
    alchemy: useGetFirebaseImage('icons/professions', 'Trade_alchemy.png'),
    blacksmithing: useGetFirebaseImage('icons/professions', 'Trade_blacksmithing.png'),
    enchanting: useGetFirebaseImage('icons/professions', 'Trade_enchanting.png'),
    engineering: useGetFirebaseImage('icons/professions', 'Trade_engineering.png'),
    herbalism: useGetFirebaseImage('icons/professions', 'Trade_herbalism.png'),
    leatherworking: useGetFirebaseImage('icons/professions', 'Trade_leatherworking.png'),
    mining: useGetFirebaseImage('icons/professions', 'Trade_mining.png'),
    skinning: useGetFirebaseImage('icons/professions', 'Trade_skinning.png'),
    tailoring: useGetFirebaseImage('icons/professions', 'Trade_tailoring.png'),

    // Secondary
    cooking: useGetFirebaseImage('icons/professions', 'Trade_cooking.png'),
    firstAid: useGetFirebaseImage('icons/professions', 'Trade_first-aid.png'),
    fishing: useGetFirebaseImage('icons/professions', 'Trade_fishing.png'),
  };

  const addPrimary = () => {
    setPrimaries([...primaries, '']);
  };

  const addSecondary = () => {
    setSecondaries([...secondaries, '']);
  };

  return (
    <>
      <QuestionHeader>
        Professions
      </QuestionHeader>

      <QuestionContent>
        <ProfessionsGrid>
          <div>
            <Heading as="h2">Primary professions</Heading>

            {primaries.map((_, i) => (
              <ProfessionInput
                key={i}
                name={`${primaryFieldName}[${i}]`}
                index={i}
                items={professions.filter((proff) => proff.primary)}
              />
            ))}

            {primaries.length < 2 && (
              <Button type="button" onClick={addPrimary} styleType="simple">+ Profession</Button>
            )}
          </div>

          <div>
            <Heading as="h2">Secondary professions</Heading>

            {secondaries.map((_, i) => (
              <ProfessionInput
                key={i}
                name={`${secondaryFieldName}[${i}]`}
                index={i}
                items={professions.filter((proff) => !proff.primary)}
              />
            ))}

            {secondaries.length < 3 && (
              <Button type="button" onClick={addSecondary} styleType="simple">+ Profession</Button>
            )}
          </div>
        </ProfessionsGrid>

        <NextButton onClick={onNextClick}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterQuestion;
