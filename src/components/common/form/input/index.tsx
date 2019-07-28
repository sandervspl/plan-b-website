import React, { forwardRef } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { InputContainer, StyledInput, Highlight, Bar, Label } from './styled';

const Input: InputType = forwardRef<HTMLInputElement, InputProps>(
  ({ label, input, ...props }, ref) => {
    return (
      <InputContainer>
        <StyledInput {...input} {...props} ref={ref} id={input.name} />
        <Highlight />
        <Bar />
        <Label htmlFor={input.name}>{label}</Label>
      </InputContainer>
    );
  }
);

export type InputProps = FieldRenderProps<HTMLInputElement> & {
  label?: string;
};

type InputType = React.ForwardRefExoticComponent<InputProps>;

export default Input;
