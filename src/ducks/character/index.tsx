import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

const LOAD = 'character/LOAD';
const FAILED = 'character/FAILED';
const SUCCESS = 'character/SUCCESS';

const initialState: i.RecruitmentState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>) => {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case FAILED:
      return {
        ...state,
        data: undefined,
        loading: false,
        error: true,
      };
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const actions = {
  load: () => action(LOAD),
  failed: () => action(FAILED),
  success: (char: i.CharacterBody) => action(SUCCESS, char),
};

export const fetchCharacter: i.FetchCharacterDuck = (name) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get<i.CharacterBody>({
    url: api.url.api,
    path: `blizzard/character/${name}`,
  })
    .then((res) => {
      if ('status' in res) {
        dispatch(actions.failed());
        return;
      }

      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
