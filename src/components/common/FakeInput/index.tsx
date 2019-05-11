import React, { useRef } from 'react';
import { FieldRenderProps } from 'react-final-form';
import { TextInputField } from 'modules/Apply/styled';
import { FakeInputFieldContainer, FakeInputField, Placeholder } from './styled';

const FakeInput: React.FC<Props> = ({
  fieldArrayName, fieldName, placeholder, maxLength, type,
}) => {
  const inputEl = useRef<HTMLSpanElement>(null);
  const handleOnInput: HandleOnInput = (input) => (e) => {
    let val = e.currentTarget.textContent as any || '';

    // Get new char by extracting the difference
    const newChar = (val as string).split(input.value).join('');

    // Transform newChar from string to number if it's a number
    const char = isNaN(+newChar) ? newChar : +newChar;

    if (
      (maxLength && val && val.length > maxLength)
      || (val && type && typeof char !== type)
    ) {
      val = input.value;
    }

    inputEl.current!.textContent = val;
    input.onChange(val);
  };

  return (
    <TextInputField
      id={`${fieldArrayName}.${fieldName}`}
      name={`${fieldArrayName}.${fieldName}`}
      placeholder={placeholder}
      tabIndex={-1}
      render={({ input }: FieldRenderProps<HTMLSpanElement>) => (
        <FakeInputFieldContainer>
          <FakeInputField
            as="span"
            contentEditable
            onInput={handleOnInput(input)}
            hasInput={!!input.value}
            id={`fake-${fieldArrayName}.${fieldName}`}
            ref={inputEl}
          />
          <Placeholder
            visible={!input.value}
            onClick={() => {
              // Set focus on FakeInputField on click
              const el = document.querySelector<HTMLSpanElement>(
                `#fake-${fieldArrayName}\\.${fieldName}`
              );

              if (el) {
                el.focus();
              }
            }}
          >
            {placeholder}
          </Placeholder>
        </FakeInputFieldContainer>
      )}
    />
  );
};

export type Props = {
  fieldArrayName: string;
  fieldName: string;
  placeholder: string;
  maxLength?: number;
  type?: 'string' | 'number';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HandleOnInput = (input: FieldRenderProps<any>['input']) => (e: React.FormEvent<HTMLSpanElement>) => void;

export default FakeInput;
