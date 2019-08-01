import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { getCmsUrl } from 'services';
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
        items={items.map((item) => ({
          id: item.id,
          name: item.name,
          icon: getCmsUrl(item.icon.url),
        }))}
      />
      <CharacterField name={`${name}.level`} label="Level" type="number" min="0" max="300" />
      {/* <CloseIcon onClick={removeInput} /> */}
    </ProfessionInputContainer>
  );
};

export type Props = React.ButtonHTMLAttributes<{}> & {
  name: string;
  index: number;
  items: i.CmsProfession[];
};

export default ProfessionInput;
