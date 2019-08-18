import * as i from 'types';
import React from 'react';
import QuestionMark from 'images/questionmark.jpg';
import { useImageLoader } from 'hooks';
import {
  ProfessionDetailsContainer, ProfessionIcon, ProfessionName, ProfessionSkill,
} from './styled';

const ProfessionDetail: React.FC<Props> = ({ profession }) => {
  const [icon] = profession.icon
    ? useImageLoader(`https://render-eu.worldofwarcraft.com/icons/56/${profession.icon}.jpg`)
    : [QuestionMark];

  return (
    <ProfessionDetailsContainer>
      <ProfessionIcon
        src={icon}
        alt={profession.name}
        title={profession.name}
      />
      <ProfessionName as="h2">
        {profession.name}
      </ProfessionName>
      <ProfessionSkill rank={profession.rank} max={profession.max} title="Current rank" />
    </ProfessionDetailsContainer>
  );
};

export type Props = {
  profession: i.ArmoryProfession;
};

export default ProfessionDetail;
