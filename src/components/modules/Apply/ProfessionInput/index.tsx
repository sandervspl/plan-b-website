import * as i from 'types';
import React from 'react';
import { Field } from 'react-final-form';
import { getCmsUrl } from 'services';
import { useImageLoader } from 'hooks';
import { InputRange, DropdownInput } from 'common/form';
import { ProfessionInputContainer } from './styled';

const ProfessionInput: React.FC<Props> = ({ name, index, items }) => {
  const formatLabel = (value: string, type: string) => {
    if (type === 'value') {
      return `Level ${value}`;
    }

    return value;
  };

  return (
    <ProfessionInputContainer>
      <Field
        component={DropdownInput}
        name={`${name}.id`}
        label={`profession #${index + 1}`}
        placeholder="Select profession"
        items={items.map((item) => ({
          id: item.id,
          name: item.name,
          icon: useImageLoader(getCmsUrl(item.icon && item.icon.url))[0],
        }))}
      />
      <Field
        component={InputRange}
        name={`${name}.level`}
        label={formatLabel}
      />
      {/* <CloseIcon onClick={removeInput} /> */}
    </ProfessionInputContainer>
  );
};

export type Props = React.ButtonHTMLAttributes<{}> & {
  name: string;
  index: number;
  items: i.CmsProfession[];
  errors?: i.QuestionComponentProps['errors'];
};

export default ProfessionInput;
