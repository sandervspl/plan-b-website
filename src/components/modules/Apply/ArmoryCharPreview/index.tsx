import * as i from 'types';
import React from 'react';
import { Paragraph } from 'common';
import { ArmoryCharPreviewContainer, Name, Guild, ArmoryCharacter, Loader } from './styled';

const ArmoryCharPreview: React.FC<props> = ({ character, onCharacterClick }) => (
  <ArmoryCharPreviewContainer>
    {character.loading ? (
      <Loader />
    ) : character.error ? (
      <Paragraph>Sorry, we couldn't not find your character.</Paragraph>
    ) : character.data && (
      <ArmoryCharacter onClick={onCharacterClick}>
        <img
          src={`https://render-eu.worldofwarcraft.com/character/${character.data.thumbnail}`}
          alt={`${character.data.name}'s avatar`}
          title={`${character.data.name}'s avatar`}
        />
        <div>
          <Name as="h3">{character.data.name}</Name>
          {character.data.guild && (
            <Guild>{'<'}{character.data.guild.name}{'>'}</Guild>
          )}
        </div>
      </ArmoryCharacter>
    )}
  </ArmoryCharPreviewContainer>
);

export type props = {
  character: i.CharacterState;
  onCharacterClick: () => void;
};

export default ArmoryCharPreview;
