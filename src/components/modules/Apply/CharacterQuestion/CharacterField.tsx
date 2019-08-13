import React from 'react';
import { Field } from 'react-final-form';
import { validate } from 'services';
import Input from 'common/form/Input';

const CharacterField: React.FC<Props> = ({ name, label, required, ...props }) => {
  return (
    <Field
      name={name}
      label={label}
      component={Input}
      required={required}
      validate={required ? validate.required : props.validate}
      {...props}
    />
  );
};

CharacterField.defaultProps = {
  required: true,
};

export type Props = React.InputHTMLAttributes<{}> & {
  name: string;
  label: string;
  as?: 'textarea';
  validate?: (value: string) => string | undefined;
};

export default CharacterField;
