import * as i from 'types';
import { ActionType, getType, createStandardAction } from 'typesafe-actions';

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: createStandardAction('form/UPDATE')<{ form: i.Forms; data: any }>(),
  sendStart: createStandardAction('form/SEND_START')(),
  sendSuccess: createStandardAction('form/SEND_SUCCESS')(),
  sendFailed: createStandardAction('form/SEND_FAILED')(),
};

const initialState: i.ReduxFormState = {
  sending: { loading: false, success: false, failed: false },
};

export default (state = initialState, action: ActionType<typeof actions>): i.ReduxFormState => {
  switch (action.type) {
    case getType(actions.update):
      return {
        ...state,
        [action.payload.form]: action.payload.data,
      };
    case getType(actions.sendStart):
      return {
        ...state,
        sending: {
          loading: true,
          success: false,
          failed: false,
        },
      };
    case getType(actions.sendSuccess):
      return {
        ...state,
        sending: {
          loading: false,
          success: true,
          failed: false,
        },
      };
    case getType(actions.sendFailed):
      return {
        ...state,
        sending: {
          loading: false,
          success: false,
          failed: true,
        },
      };
    default:
      return state;
  }
};

export const getFormState: i.GetFormState = (state, form) => (
  (state && state.form && state.form[form]) || {}
);

export const sendApplication: i.SendApplicationDuck = () => async (dispatch, getState, api) => {
  if (!getState().form.application) return;

  dispatch(actions.sendStart());

  const { values } = getState().form.application!;

  return api.post({
    url: api.url.cms,
    path: 'recruitmentapplications',
    body: values,
  })
    .then(() => {
      dispatch(actions.sendSuccess());
    })
    .catch(() => {
      dispatch(actions.sendFailed());
    });
};
