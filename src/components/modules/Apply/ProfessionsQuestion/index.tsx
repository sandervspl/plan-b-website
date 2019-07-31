import * as i from 'types';
import React, { useState } from 'react';
import { useGetFirebaseImage } from 'hooks';
import { Button, Heading } from 'common';
// import { actions } from 'ducks/form';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import ProfessionInput from '../ProfessionInput';
import { ProfessionsGrid } from './styled';

const CharacterQuestion: React.FC<Props> = ({ onNextClick }) => {
  // const dispatch = useDispatch();
  // const form = useSelector((state) => state.form.application!);
  const [primaries, setPrimaries] = useState<(number | null)[]>([]);
  const [secondaries, setSecondaries] = useState<(number | null)[]>([]);
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

  // eslint-disable-next-line
  const getCleanArray = (arr: any[]) => arr.filter((val) => val != null);

  const add = (arr: (number | null)[], setFn: Function) => () => {
    const copy = [...arr];
    const cleanArray = getCleanArray(arr);
    const firstEmptyIndex = arr.indexOf(null);

    if (firstEmptyIndex > -1) {
      copy[firstEmptyIndex] = firstEmptyIndex;
    } else {
      copy.push(cleanArray.length);
    }

    setFn(copy);
  };

  // const removePrimary = (num: number) => () => {
  //   const copy = [...primaries];

  //   copy[num] = null;

  //   setPrimaries(copy);
  // };

  // const removeSecondary = (num: number) => () => {
  //   const copy = [...secondaries];

  //   copy[num] = null;

  //   dispatch(actions.update({
  //     form: 'application',
  //     data: {
  //       ...form,
  //       values: {
  //         ...form.values,
  //         professions: {
  //           ...form.values.professions,
  //           secondary: copy,
  //         },
  //       },
  //     },
  //   }));

  //   setSecondaries(copy);
  // };

  return (
    <>
      <QuestionHeader>
        Professions
      </QuestionHeader>

      <QuestionContent>
        <ProfessionsGrid>
          <div>
            <Heading as="h2">Primary professions</Heading>

            {primaries.map((num, i) => (
              <ProfessionInput
                key={i}
                name={`${primaryFieldName}[${num}]`}
                index={i}
                items={[
                  {
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
                  },
                ]}
              />
            ))}

            {primaries.length < 2 && (
              <Button type="button" onClick={add(primaries, setPrimaries)} styleType="simple">
                + Profession
              </Button>
            )}
          </div>

          <div>
            <Heading as="h2">Secondary professions</Heading>

            {secondaries.map((num, i) => (
              <ProfessionInput
                key={i}
                name={`${secondaryFieldName}[${num}]`}
                index={i}
                items={[
                  {
                    name: 'Cooking',
                    icon: icons.cooking,
                  }, {
                    name: 'First Aid',
                    icon: icons.firstAid,
                  }, {
                    name: 'Fishing',
                    icon: icons.fishing,
                  },
                ]}
              />
            ))}

            {secondaries.length < 3 && (
              <Button type="button" onClick={add(secondaries, setSecondaries)} styleType="simple">
                + Profession
              </Button>
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
