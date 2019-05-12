import * as i from 'types';
import React from 'react';
import { useImageLoader } from 'services/hooks';
import { Header, ClassText } from 'common';
import { Avatar, CharacterDetails, CharacterInfoContainer, Guild, ClassAndLevel } from './styled';

const CharacterInfo: React.FC<CharacterInfoProps> = ({ character }) => {
  const avatar = useImageLoader(
    `https://render-eu.worldofwarcraft.com/character/${character.thumbnail}`
  );

  return (
    <CharacterInfoContainer>
      <Avatar src={avatar} />
      <CharacterDetails>
        <Header as="h2">{character.name}</Header>
        {character.guild && (
          <Guild>
            {'<'}{character.guild.name}{'>'}
          </Guild>
        )}
        <ClassAndLevel as="p">
        Level {character.level} {''}
          <ClassText classId={character.class.id}>
            {character.class.name}
          </ClassText>
        </ClassAndLevel>
      </CharacterDetails>
    </CharacterInfoContainer>
  );
};

export type CharacterInfoProps = {
  character: i.CharacterData;
};

export default CharacterInfo;