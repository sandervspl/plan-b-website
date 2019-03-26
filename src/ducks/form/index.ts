import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

const UPDATE = 'form/UPDATE';
const SET_ACTIVE_FIELD = 'form/SET_ACTIVE_FIELD';

const initialState: i.ReduxFormState = {
  activeField: '',
};

export default (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        [action.payload.form]: action.payload.data,
      };
    case SET_ACTIVE_FIELD:
      return {
        ...state,
        activeField: action.payload,
      };
    default:
      return state;
  }
};

export const actions = {
  update: (form: i.Forms, data: any) => action(UPDATE, { form, data }),
  setActiveField: (name: string) => action(SET_ACTIVE_FIELD, name),
};

export const getFormState: i.GetFormState = (state, form) => (
  (state && state.form && state.form[form]) || {}
);
