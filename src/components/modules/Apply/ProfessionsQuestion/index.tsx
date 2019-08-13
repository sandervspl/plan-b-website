import * as i from 'types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'hooks';
import { fetchProfessions } from 'ducks/character';
import { Button, Heading } from 'common';
import { QuestionContent, NextButton } from '../styled';
import QuestionHeader from '../QuestionHeader';
import ProfessionInput from '../ProfessionInput';
import { ProfessionsGrid } from './styled';

const CharacterQuestion: React.FC<Props> = ({ onNextClick, inputTabIndex }) => {
  const dispatch = useDispatch();
  const professions = useSelector((state) => state.character.professions);
  const [primaries, setPrimaries] = useState<string[]>([]);
  const [secondaries, setSecondaries] = useState<string[]>([]);
  const primaryFieldName = 'professions.primary';
  const secondaryFieldName = 'professions.secondary';

  useEffect(() => {
    dispatch(fetchProfessions());
  }, []);

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
              <Button
                type="button"
                onClick={addSecondary}
                styleType="simple"
                tabIndex={inputTabIndex}
              >
                + Profession
              </Button>
            )}
          </div>
        </ProfessionsGrid>

        <NextButton onClick={onNextClick} tabIndex={inputTabIndex}>
          <span>Continue</span>
        </NextButton>
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterQuestion;
