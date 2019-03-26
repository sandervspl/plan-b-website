import * as i from 'types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from 'ducks/character';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { useDebounce } from 'services/hooks';
import { TextField, Label } from '../styled';

const ArmoryCharPreview = React.lazy(() => import('../ArmoryCharPreview'));

const ArmorySelect: React.FC<props> = ({ character, active, onNextClick, ...props }) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedUserInput = useDebounce<string>(inputValue, 250);

  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#armory_select_user_input');

      if (el) el.focus();
    }, TRANSITION_TIME_MS);
  }, [active]);

  useEffect(() => {
    if (!debouncedUserInput) return;

    props.fetchCharacter(inputValue);
  }, [debouncedUserInput]);

  return (
    <div>
      <Label htmlFor="armory_select_user_input">
        <span>Character name</span>

        <TextField
          as="input"
          id="armory_select_user_input"
          name="armory_select_user_input"
          component="input"
          type="text"
          tabIndex={-1}
          value={inputValue}
          onChange={(e) => setInputValue(e.currentTarget.value)}
        />
      </Label>

      {(character.data || character.loading || character.error) && (
        <React.Suspense fallback={null}>
          <ArmoryCharPreview
            active={active}
            onCharacterClick={onNextClick}
            character={character}
          />
        </React.Suspense>
      )}
    </div>
  );
};

export type props = i.QuestionComponentProps & {
  character: i.CharacterState;
  fetchCharacter: i.FetchCharacter;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  character: state.character,
});

export default connect(mapStateToProps, { fetchCharacter })(ArmorySelect);
