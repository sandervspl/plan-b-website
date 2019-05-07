import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { Field, FieldRenderProps } from 'react-final-form';
import { fetchCharacter } from 'ducks/character';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { useDebounce } from 'services/hooks';
import CharacterPane from 'modules/CharacterPane';
import { TextInputField, NextButton, QuestionContent, QuestionField } from '../styled';
import QuestionHeader from '../QuestionHeader';

const CharacterSelect: React.FC<Props> = ({ character, active, onNextClick, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const [armoryLink, setArmoryLink] = useState('');
  const debouncedUserInput = useDebounce<string>(inputValue, 250);

  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#character_name');

      if (el) {
        el.focus();
      }
    }, TRANSITION_TIME_MS);
  }, [active]);

  useEffect(() => {
    if (!debouncedUserInput) return;

    props.fetchCharacter(inputValue);
  }, [debouncedUserInput]);

  useEffect(() => {
    if (!character.data) return;

    const name = character.data!.name.toLowerCase();
    setArmoryLink(`https://worldofwarcraft.com/en-gb/character/eu/ragnaros/${name}`);
  }, [character.data]);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    return setInputValue(e.currentTarget.value);
  };

  return (
    <>
      <QuestionHeader>
        Select your character
      </QuestionHeader>

      <QuestionContent>
        <QuestionField>
          I am {''}
          <TextInputField
            as="input"
            component="input"
            id="character_name"
            name="character_name"
            placeholder="character name"
            tabIndex={-1}
            onChange={onChange}
            value={inputValue}
          />
        </QuestionField>

        <CharacterPane character={character} tiltStyle={props.tiltStyle} />

        <Field
          name="character_armory_link"
          // @ts-ignore onNextClick type error
          component={NextRadioButton}
          type="radio"
          value={armoryLink}
          tabIndex={-1}
          onNextClick={onNextClick}
        />
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps & {
  character: i.CharacterState;
  fetchCharacter: i.FetchCharacter;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  character: state.character,
});

export default connect(mapStateToProps, { fetchCharacter })(CharacterSelect);


const NextRadioButton: React.FC<NextRadioButtonProps> = ({ onNextClick, input }) => {
  const character: i.CharacterState = useSelector((state: i.ReduxState) => state.character);

  const handleNextClick = () => {
    input.onChange(input.value);
    onNextClick();
  };

  return (
    <NextButton onClick={handleNextClick} disabled={!character.data || character.loading}>
      <span>Continue</span>
    </NextButton>
  );
};

type NextRadioButtonProps = FieldRenderProps<HTMLButtonElement> & {
  onNextClick: Function;
}
