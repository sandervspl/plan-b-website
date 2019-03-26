import * as i from 'types';
import React, { useEffect } from 'react';
import { Field } from 'react-final-form';
import { connect } from 'react-redux';
import { actions } from 'ducks/form';
import { Paragraph } from 'common';
import { ArmoryCharPreviewContainer, Name, Guild, ArmoryCharacter, Loader } from './styled';

const ArmoryCharPreview: React.FC<props> = ({ active, character, onCharacterClick, ...props }) => {
  const FIELD_NAME: i.FieldNames = 'armory_link';

  useEffect(() => {
    if (active) {
      props.setActiveField(FIELD_NAME);
    }
  }, [active]);

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
          <img
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
  setActiveField: i.SetActiveField;
};

export default connect(null, {
  setActiveField: actions.setActiveField,
})(ArmoryCharPreview);
