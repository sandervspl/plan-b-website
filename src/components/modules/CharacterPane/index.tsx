import * as i from 'types';
import React from 'react';
import { Paragraph } from 'common';
import {
  CharacterPaneContainer, CharacterPaneContent, CharacterData, Loader, CharacterInfoContainer,
} from './styled';
import CharacterInfo from './components/CharacterInfo';
import CharacterProfessions from './components/CharacterProfessions';
import CharacterItems from './components/CharacterItems';

const CharacterPane: React.FC<Props> = ({ character, tiltStyle }) => {
  const hasCharacter = !!character.data && !character.loading && !character.error;
  const showInfo = character.loading || character.error;

  return (
    <>
      {showInfo && (
        <CharacterInfoContainer>
          {character.loading ? (
            <Loader />
          ) : character.error && (
            <Paragraph>Sorry, we couldn't find your character.</Paragraph>
          )}
        </CharacterInfoContainer>
      )}

      <CharacterPaneContainer active={hasCharacter} {...tiltStyle}>
        <CharacterPaneContent>
          {character.data && (
            <CharacterData>
              <CharacterInfo character={character.data} />

              {character.data.professions && (
                <CharacterProfessions professions={character.data.professions} />
              )}

              <CharacterItems items={character.data.items} />
            </CharacterData>
          )}
        </CharacterPaneContent>
      </CharacterPaneContainer>
    </>
  );
};

export type Props = {
  character: i.CharacterState;
  tiltStyle: i.TiltStyle;
};

export default CharacterPane;
