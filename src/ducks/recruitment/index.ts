import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

const LOAD = 'recruitment/LOAD';
const FAILED = 'recruitment/FAILED';
const SUCCESS = 'recruitment/SUCCESS';
const SUCCESS_CHARACTER = 'recruitment/SUCCESS_CHARACTER';

const initialState: i.RecruitmentState = {
  data: undefined,
  character: undefined,
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
    case SUCCESS_CHARACTER:
      return {
        ...state,
        character: action.payload,
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
  success: (page: i.RecruitmentData) => action(SUCCESS, page),
  successCharacter: (char: i.CharacterData) => action(SUCCESS_CHARACTER, char),
};

export const fetchRecruitment = (): i.ThunkAction => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get({
    url: api.url.cms,
    path: `${API_ENDPOINT.RECRUITMENT}`,
  })
    .then((res) => {
      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};

export const fetchCharacter: i.FetchCharacterDuck = (name) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get<i.CharacterData>({
    url: api.url.api,
    path: `blizzard/character/${name}`,
  })
    .then((res) => {
      if ('status' in res) {
        dispatch(actions.failed());
        return;
      }

      dispatch(actions.successCharacter(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
