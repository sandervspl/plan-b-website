import * as i from 'types';
import React from 'react';
import { Paragraph } from 'common';
import ProfessionDetail from '../ProfessionDetail';
import { CharacterProfessionsContainer, ProfessionsError } from './styled';

const CharacterProfessions: React.FC<Props> = ({ professions }) => {
  const primary1 = professions.primary[0];
  const primary2 = professions.primary[1];
  const hasProfessions = Boolean(primary1 && primary2);

  return (
    <CharacterProfessionsContainer hasProfessions={hasProfessions}>
      {primary1 && <ProfessionDetail profession={primary1} />}
      {primary2 && <ProfessionDetail profession={primary2} />}

      {!hasProfessions && (
        <ProfessionsError>No primary professions.</ProfessionsError>
      )}
    </CharacterProfessionsContainer>
  );
};

export type Props = {
  professions: i.Professions;
};

export default CharacterProfessions;
