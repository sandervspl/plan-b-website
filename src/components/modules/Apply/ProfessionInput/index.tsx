import React from 'react';
import CharacterField from '../CharacterQuestion/CharacterField';
import { ProfessionInputContainer } from './styled';

const ProfessionInput: React.FC<Props> = ({ name, index }) => {
  return (
    <ProfessionInputContainer>
      <CharacterField name={`${name}.name`} label={`Profession #${index}`} />
      <CharacterField name={`${name}.level`} label="Level" type="number" min="0" max="300" />
    </ProfessionInputContainer>
  );
};

export type Props = React.ButtonHTMLAttributes<{}> & {
  name: string;
  index: number;
};

export default ProfessionInput;
