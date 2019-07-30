import * as i from 'types';
import React, { useState } from 'react';
import { useGetFirebaseImage } from 'hooks';
import { Button, Heading } from 'common';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import ProfessionInput from '../ProfessionInput';
import { ProfessionsGrid } from './styled';

const CharacterQuestion: React.FC<Props> = ({ onNextClick, errors }) => {
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
                index={i + 1}
                items={[{
                  name: 'Alchemy',
                  icon: icons.alchemy,
                }, {
                  name: 'Blacksmithing',
                  icon: icons.blacksmithing,
                }, {
                  name: 'Enchanting',
                  icon: icons.enchanting,
                }, {
                  name: 'Engineering',
                  icon: icons.engineering,
                }, {
                  name: 'Herbalism',
                  icon: icons.herbalism,
                }, {
                  name: 'Leatherworking',
                  icon: icons.leatherworking,
                }, {
                  name: 'Mining',
                  icon: icons.mining,
                }, {
                  name: 'Skinning',
                  icon: icons.skinning,
                }, {
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
                index={i + 1}
                items={[{
                  name: 'Cooking',
                  icon: icons.cooking,
                }, {
                  name: 'First Aid',
                  icon: icons.firstAid,
                }, {
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

        <NextButton onClick={onNextClick} disabled={!!errors.professions}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterQuestion;
