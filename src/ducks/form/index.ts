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

  const {
    character, professions, role, raid_experience, personal,
  } = getState().form.application!.values;

  const getProfession = (type: string, id: number) => {
    return professions && professions[type] && professions[type][id]
      ? professions[type][id]
      : {};
  };

  const body = {
    char_name: character.name,
    char_level: character.level,
    char_server: character.server,
    characterrole: role,
    class: character.class,
    race: character.race,

    char_primary_proff_1: getProfession('primary', 0).id,
    char_primary_proff_1_level: getProfession('primary', 0).level,
    char_primary_proff_2: getProfession('primary', 1).id,
    char_primary_proff_2_level: getProfession('primary', 1).level,

    char_secondary_proff_1: getProfession('secondary', 0).id,
    char_secondary_proff_1_level: getProfession('secondary', 0).level,
    char_secondary_proff_2: getProfession('secondary', 1).id,
    char_secondary_proff_2_level: getProfession('secondary', 1).level,
    char_secondary_proff_3: getProfession('secondary', 2).id,
    char_secondary_proff_3_level: getProfession('secondary', 2).level,

    name: personal.name,
    age: personal.age,
    story: personal.story,
    reason: personal.reason,

    char_raid_experience: raid_experience,
  };

  return api.methods.post({
    url: api.url.cms,
    path: 'applications',
    body,
  })
    .then(() => {
      dispatch(actions.sendSuccess());
    })
    .catch(() => {
      dispatch(actions.sendFailed());
    });
};
