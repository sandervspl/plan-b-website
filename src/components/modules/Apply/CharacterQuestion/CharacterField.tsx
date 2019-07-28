import React from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import Input from 'common/form/input';

const CharacterField: React.FC<Props> = ({ name, label }) => {
  return (
    <Field
      name={name}
      label={label}
      component={Input}
      required
      validate={validate.required}
    />
  );
};

export type Props = {
  name: string;
  label: string;
};

export default CharacterField;
