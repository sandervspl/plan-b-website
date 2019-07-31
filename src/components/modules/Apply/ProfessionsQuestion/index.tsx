import * as i from 'types';
import React, { useState } from 'react';
import { useGetFirebaseImage } from 'hooks';
import { Button, Heading } from 'common';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import ProfessionInput from '../ProfessionInput';
import { ProfessionsGrid } from './styled';

const CharacterQuestion: React.FC<Props> = ({ onNextClick }) => {
  const [primaries, setPrimaries] = useState<string[]>([]);
  const [secondaries, setSecondaries] = useState<string[]>([]);
  const primaryFieldName = 'professions.primary';
  const secondaryFieldName = 'professions.secondary';

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
                items={[{
                  id: 0,
                  name: 'Alchemy',
                  icon: icons.alchemy,
                }, {
                  id: 1,
                  name: 'Blacksmithing',
                  icon: icons.blacksmithing,
                }, {
                  id: 2,
                  name: 'Enchanting',
                  icon: icons.enchanting,
                }, {
                  id: 3,
                  name: 'Engineering',
                  icon: icons.engineering,
                }, {
                  id: 4,
                  name: 'Herbalism',
                  icon: icons.herbalism,
                }, {
                  id: 5,
                  name: 'Leatherworking',
                  icon: icons.leatherworking,
                }, {
                  id: 6,
                  name: 'Mining',
                  icon: icons.mining,
                }, {
                  id: 7,
                  name: 'Skinning',
                  icon: icons.skinning,
                }, {
                  id: 8,
                  name: 'Tailoring',
                  icon: icons.tailoring,
                }]}
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
                items={[{
                  id: 9,
                  name: 'Cooking',
                  icon: icons.cooking,
                }, {
                  id: 10,
                  name: 'First Aid',
                  icon: icons.firstAid,
                }, {
                  id: 11,
                  name: 'Fishing',
                  icon: icons.fishing,
                }]}
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
