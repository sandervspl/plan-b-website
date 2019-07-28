import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { useSelector } from 'hooks';
import { NextButton, QuestionContent } from '../styled';
import QuestionHeader from '../QuestionHeader';

const CharacterSelect: React.FC<Props> = ({ active, onNextClick, ...props }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#character_name');

      if (el) {
        el.focus();
      }
    }, TRANSITION_TIME_MS);
  }, [active]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <QuestionHeader>
        Your character
      </QuestionHeader>

      <QuestionContent>
        hi
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps;

export default CharacterSelect;
