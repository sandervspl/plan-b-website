import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

export const actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (payload: { form: i.Forms; data: any }) => action('form/UPDATE', payload),

  sendStart: () => action('form/SEND_START'),
  sendSuccess: () => action('form/SEND_SUCCESS'),
  sendFailed: () => action('form/SEND_FAILED'),

  reset: () => action('form/RESET'),
};

const initialState: i.ReduxFormState = {
  sending: { loading: false, success: false, failed: false },
};

export default (state = initialState, action: ActionType<typeof actions>): i.ReduxFormState => {
  switch (action.type) {
    case 'form/RESET':
      return initialState;
    case 'form/UPDATE':
      return {
        ...state,
        [action.payload.form]: action.payload.data,
      };
    case 'form/SEND_START':
      return {
        ...state,
        sending: {
          ...state.sending,
          loading: true,
          success: false,
        },
      };
    case 'form/SEND_SUCCESS':
      return {
        ...state,
        sending: {
          loading: false,
          success: true,
          failed: false,
        },
      };
    case 'form/SEND_FAILED':
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

  return api.methods.post({
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
