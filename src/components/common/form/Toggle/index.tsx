import * as React from 'react';
import { FieldRenderProps } from 'react-final-form';
import ReactToggle from 'react-toggle';
import { Paragraph } from 'common/typography';
import { ToggleContainer } from './styled';

/* eslint-disable @typescript-eslint/no-explicit-any */
const Toggle: React.FC<ToggleProps> = ({ label, input }) => {
  return (
    <ToggleContainer>
      <ReactToggle onChange={input.onChange} />
      <Paragraph>{label}</Paragraph>
    </ToggleContainer>
  );
};
/* eslint-enable */

export type ToggleProps = FieldRenderProps<HTMLInputElement> & {
  label?: (value: number, type: string) => string;
  children?: any; // eslint-disable-line
};

export default Toggle;
