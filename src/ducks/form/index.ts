import * as i from 'types';
import { ActionType, getType, createStandardAction } from 'typesafe-actions';

const initialState: i.ReduxFormState = {};

export default (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case getType(actions.update):
      return {
        ...state,
        [action.payload.form]: action.payload.data,
      };
    default:
      return state;
  }
};

export const actions = {
  update: createStandardAction('form/UPDATE')<{ form: i.Forms; data: any }>(),
};

export const getFormState: i.GetFormState = (state, form) => (
  (state && state.form && state.form[form]) || {}
);
