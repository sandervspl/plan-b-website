import * as i from 'types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchCharacter } from 'ducks/recruitment';
import { TRANSITION_TIME_MS } from 'styles/pageTransition';
import { useDebounce } from 'services/hooks';
import { TextField, Label } from '../styled';

const ArmorySelect: React.FC<props> = ({ form, reduxForm, active, mutators, ...props }) => {
  const debouncedUserInput = useDebounce<string>(
    reduxForm[form].values.armory_select_user_input,
    500
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
      props.fetchCharacter(debouncedUserInput)
        .then(() => {
          if (mutators && mutators.setArmoryLink) {
            mutators.setArmoryLink();
          }
        });
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
        />
      </Label>

      <TextField
        name="armory_link"
        component="input"
        type="text"
        hidden
      />
    </div>
  );
};

export type props = {
  form: i.Forms;
  reduxForm: i.ReduxFormState;
  fetchCharacter: i.FetchCharacter;
  active?: boolean;
  mutators?: { [key: string]: () => void };
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  reduxForm: state.form,
});

export default connect(mapStateToProps, { fetchCharacter })(ArmorySelect);
