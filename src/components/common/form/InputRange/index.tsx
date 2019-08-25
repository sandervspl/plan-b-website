import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import ReactInputRange from 'react-input-range';
import { InputRangeContainer } from './styled';

/* eslint-disable @typescript-eslint/no-explicit-any */
const InputRange: React.FC<InputRangeProps> = ({ label, input }) => {
  return (
    <InputRangeContainer>
      <ReactInputRange
        value={input.value || 0}
        onChange={input.onChange as any}
        minValue={0}
        maxValue={300}
        step={5}
        formatLabel={label}
      />
    </InputRangeContainer>
  );
};
/* eslint-enable */

export type InputRangeProps = FieldRenderProps<HTMLInputElement> & {
  label?: (value: number, type: string) => string;
  children?: any; // eslint-disable-line
};

export default InputRange;
