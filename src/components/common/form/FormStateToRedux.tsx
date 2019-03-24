import React from 'react';
import { connect } from 'react-redux';
import { FormSpy } from 'react-final-form';
import { actions } from 'ducks/form';

const FormStateToRedux = ({ form, update }) => (
  <FormSpy onChange={(state) => update(form, state)} />
);

export default connect(undefined, {
  update: actions.update,
})(FormStateToRedux);
