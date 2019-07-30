import React from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import Input from 'common/form/input';

const CharacterField: React.FC<Props> = ({ name, label, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={Input}
      required
      validate={validate.required}
      {...props}
    />
  );
};

export type Props = React.InputHTMLAttributes<{}> & {
  name: string;
  label: string;
  as?: 'textarea';
};

export default CharacterField;
