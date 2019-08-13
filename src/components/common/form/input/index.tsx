import React, { forwardRef } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ErrorText } from 'common/typography';
import { InputContainer, StyledInput, Highlight, Bar, Label } from './styled';

const Input: InputType = forwardRef<HTMLInputElement, InputProps>(
  ({ label, input, children, ...props }, ref) => {
    if (props.as === 'select') {
      return (
        <InputContainer>
          <StyledInput {...input} {...props} ref={ref} id={input.name}>
            <option value="" defaultValue="-1" selected disabled hidden>{label}</option>
            {children}
          </StyledInput>
        </InputContainer>
      );
    }

    return (
      <InputContainer>
        <StyledInput {...input} {...props} ref={ref} id={input.name} />
        <Highlight />
        <Bar />
        <Label htmlFor={input.name} haserror={!!props.meta.error}>{label}</Label>
        {props.meta.error && (
          <ErrorText>{props.meta.error}</ErrorText>
        )}
      </InputContainer>
    );
  }
);

export type InputProps = FieldRenderProps<HTMLInputElement> & {
  label?: string;
  as?: 'select';
  children?: any; // eslint-disable-line
};

type InputType = React.ForwardRefExoticComponent<InputProps>;

export default Input;
