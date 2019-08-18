import * as i from 'types';
import React from 'react';
import { getCmsUrl } from 'services';
import { CircleImg, ProgressBar } from 'common';
import { ProfessionName, ProfessionContainer } from './styled';

const Profession: React.FC<Props> = ({ profession }) => {
  const currentLevel = profession.level || 0;
  let maxLevel = 75;

  if (profession.level) {
    if (profession.level >= 225) {
      maxLevel = 300;
    } else if (profession.level >= 150) {
      maxLevel = 225;
    } else if (profession.level >= 75) {
      maxLevel = 150;
    }
  }

  return (
    <ProfessionContainer>
      <ProfessionName>
        <CircleImg src={getCmsUrl(profession.icon.url)} />
        {profession.name}
      </ProfessionName>

      <ProgressBar
        current={currentLevel}
        max={maxLevel}
        label={`${currentLevel} / ${maxLevel}`}
      />
    </ProfessionContainer>
  );
};

type Props = {
  profession: i.ApplicationProfession;
};

export default Profession;
