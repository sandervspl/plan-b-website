import * as i from 'types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCharacter } from 'ducks/character';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { useDebounce } from 'services/hooks';
import { TextField, Label } from '../styled';

const ArmoryCharPreview = React.lazy(() => import('../ArmoryCharPreview'));

const ArmorySelect: React.FC<props> = ({
  character, reduxForm, form, active, onNextClick, ...props
}) => {
  const _form = reduxForm[form];

  const debouncedUserInput = useDebounce<string>(
    _form.values.armory_select_user_input,
    250
  );

  useEffect(() => {
    if (!active) return;

    setTimeout(() => {
      const el = document.querySelector<HTMLInputElement>('#armory_select_user_input');

      if (el) el.focus();
    }, TRANSITION_TIME_MS);
  }, [active]);

  useEffect(
    () => {
      if (!debouncedUserInput) return;

      props.fetchCharacter(debouncedUserInput);
    },
    [debouncedUserInput]
  );

  return (
    <div>
      <Label htmlFor="armory_select_user_input">
        <span>Character name</span>

        <TextField
          id="armory_select_user_input"
          name="armory_select_user_input"
          component="input"
          type="text"
          tabIndex={-1}
        />
      </Label>

      {(character.data || character.loading || character.error) && (
        <React.Suspense fallback={null}>
          <ArmoryCharPreview onCharacterClick={onNextClick} character={character} />
        </React.Suspense>
      )}
    </div>
  );
};

export type props = i.QuestionComponentProps & {
  character: i.CharacterState;
  reduxForm: i.ReduxFormState;
  fetchCharacter: i.FetchCharacter;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  reduxForm: state.form,
  character: state.character,
});

export default connect(mapStateToProps, { fetchCharacter })(ArmorySelect);
