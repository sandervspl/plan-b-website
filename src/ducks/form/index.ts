import * as i from 'types';
import { ActionType, getType, createStandardAction } from 'typesafe-actions';

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: createStandardAction('form/UPDATE')<{ form: i.Forms; data: any }>(),
};

const initialState: i.ReduxFormState = {};

export default (state = initialState, action: ActionType<typeof actions>): i.ReduxFormState => {
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

export const getFormState: i.GetFormState = (state, form) => (
  (state && state.form && state.form[form]) || {}
);
