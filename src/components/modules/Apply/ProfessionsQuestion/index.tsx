import * as i from 'types';
import React, { useState } from 'react';
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
              <ProfessionInput key={i} name={`${primaryFieldName}[${i}]`} index={i + 1} />
            ))}

            {primaries.length < 2 && (
              <Button type="button" onClick={addPrimary} styleType="simple">+ Profession</Button>
            )}
          </div>

          <div>
            <Heading as="h2">Secondary professions</Heading>

            {secondaries.map((_, i) => (
              <ProfessionInput key={i} name={`${secondaryFieldName}[${i}]`} index={i + 1} />
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
