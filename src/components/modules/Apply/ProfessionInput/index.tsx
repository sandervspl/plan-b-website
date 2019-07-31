import React from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import { DropdownInput } from 'common/form/DropdownInput';
import CharacterField from '../CharacterQuestion/CharacterField';
import { ProfessionInputContainer } from './styled';

const ProfessionInput: React.FC<Props> = ({ name, index, items }) => {
  return (
    <ProfessionInputContainer>
      <Field
        component={DropdownInput}
        name={`${name}.name`}
        label={`profession #${index}`}
        items={items}
        validate={validate.required}
      />
      <CharacterField name={`${name}.level`} label="Level" type="number" min="0" max="300" />
    </ProfessionInputContainer>
  );
};

export type Props = React.ButtonHTMLAttributes<{}> & {
  name: string;
  index: number;
  items: {
    name: string;
    icon: string;
  }[];
};

export default ProfessionInput;
