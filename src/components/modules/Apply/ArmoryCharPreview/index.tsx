import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { Paragraph } from 'common';
import {
  ArmoryCharPreviewContainer, Name, Guild, ArmoryCharacter, ImageContainer, Loader,
} from './styled';

const ArmoryCharPreview: React.FC<props> = ({ character, onCharacterClick }) => {
  const FIELD_NAME: i.FieldNames = 'armory_link';

  return (
    <ArmoryCharPreviewContainer>
      {character.loading ? (
        <Loader />
      ) : character.error ? (
        <Paragraph>Sorry, we couldn't find your character.</Paragraph>
      ) : character.data && (
        <ArmoryCharacter>
          <Field
            name={FIELD_NAME}
            component="input"
            type="radio"
            value={`https://worldofwarcraft.com/en-gb/character/eu/ragnaros/${character.data.name.toLowerCase()}`}
            tabIndex={-1}
            onClick={onCharacterClick}
          />
          <ImageContainer
            src={`https://render-eu.worldofwarcraft.com/character/${character.data.thumbnail}`}
            alt={`${character.data.name}'s avatar`}
            title={`${character.data.name}'s avatar`}
          />
          <div>
            <Name as="h3">
              {character.data.name}
            </Name>
            {character.data.guild && (
              <Guild>
                {'<'}{character.data.guild.name}{'>'}
              </Guild>
            )}
          </div>
        </ArmoryCharacter>
      )}
    </ArmoryCharPreviewContainer>
  );
};

export type props = {
  active?: boolean;
  character: i.CharacterState;
  onCharacterClick: () => void;
};

export default ArmoryCharPreview;
