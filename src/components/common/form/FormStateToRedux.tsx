import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { FormSpy } from 'react-final-form';
import { actions } from 'ducks/form';

const FormStateToRedux: React.FC<FormStateToReduxProps> = ({ form, update }) => (
  <FormSpy onChange={(state) => update(form, state)} />
);

type FormStateToReduxProps = {
  form: i.Forms;
  update: any; /** @todo action type */
}

export default connect(undefined, {
  update: actions.update,
})(FormStateToRedux);
