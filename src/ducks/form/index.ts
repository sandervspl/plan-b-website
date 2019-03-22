import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

const UPDATE = 'application_form/UPDATE';

const initialState: i.ReduxFormState = {};

export default (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        [action.payload.form]: action.payload.data,
      };
    default:
      return state;
  }
};

export const actions = {
  update: (form: i.Forms, data: any) => action(UPDATE, { form, data }),
};

export const getFormState: i.GetFormState = (state, form) => (
  (state && state.form && state.form[form]) || {}
);
