import * as i from 'types';
import React from 'react';
import { ArmoryCharPreviewContainer, Name, Guild, ArmoryCharacter, Loader } from './styled';

const ArmoryCharPreview: React.FC<props> = ({ character, onNextClick }) => (
  <ArmoryCharPreviewContainer>
    {character.loading ? (
      <Loader />
    ) : character.data && (
      <ArmoryCharacter onClick={onNextClick}>
        <img src={`https://render-eu.worldofwarcraft.com/character/${character.data!.thumbnail}`} />
        <div>
          <Name as="h3">
            <span>{character.data.level}</span>
            {character.data.name}
          </Name>
          {character.data.guild && (
            <Guild>{character.data.guild.name}</Guild>
          )}
        </div>
      </ArmoryCharacter>
    )}
  </ArmoryCharPreviewContainer>
);

export type props = {
  character: i.CharacterState;
  onNextClick: () => void;
};

export default ArmoryCharPreview;
