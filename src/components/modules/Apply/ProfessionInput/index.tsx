import React from 'react';
import { Field } from 'react-final-form';
import { DropdownInput } from 'common/form/DropdownInput';
import CharacterField from '../CharacterQuestion/CharacterField';
import { ProfessionInputContainer } from './styled';

const ProfessionInput: React.FC<Props> = ({ name, index, items }) => {
  return (
    <ProfessionInputContainer>
      <Field
        component={DropdownInput}
        name={`${name}.id`}
        label={`profession #${index + 1}`}
        items={items}
      />
      <CharacterField name={`${name}.level`} label="Level" type="number" min="0" max="300" />
      {/* <CloseIcon onClick={removeInput} /> */}
    </ProfessionInputContainer>
  );
};

export type Props = React.ButtonHTMLAttributes<{}> & {
  name: string;
  index: number;
  items: {
    id: number;
    name: string;
    icon: string;
  }[];
};

export default ProfessionInput;
