import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

export const actions = {
  load: () => action('character/LOAD'),
  failed: () => action('character/FAILED'),
  success: (character: i.CharacterData) => action('character/SUCCESS', character),

  loadProfessions: () => action('character/LOAD_PROFESSIONS'),
  failedProfessions: () => action('character/FAILED_PROFESSIONS'),
  successProfessions: (professions: i.CmsProfession[]) => action('character/SUCCESS_PROFESSIONS', professions),
};

const initialState: i.CharacterState = {
  data: undefined,
  error: false,
  loading: false,
  professions: [],
};

export default (state = initialState, action: ActionType<typeof actions>): i.CharacterState => {
  switch (action.type) {
    case 'character/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'character/FAILED':
      return {
        ...state,
        data: undefined,
        loading: false,
        error: true,
      };
    case 'character/SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case 'character/LOAD_PROFESSIONS':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'character/FAILED_PROFESSIONS':
      return {
        ...state,
        data: undefined,
        loading: false,
        error: true,
      };
    case 'character/SUCCESS_PROFESSIONS':
      return {
        ...state,
        professions: action.payload,
        error: false,
        loading: false,
      };
    default:
      return state;
  }
};

export const fetchCharacter: i.FetchBlizzardCharacter['thunk'] = (name) => async (dispatch, getState, api) => {
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

      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};

export const fetchProfessions: i.FetchProfessions['thunk'] = () => async (dispatch, getState, api) => {
  dispatch(actions.loadProfessions());

  return api.get<i.CmsProfession[]>({
    url: api.url.cms,
    path: 'professions',
  })
    .then((res) => {
      if ('status' in res) {
        dispatch(actions.failed());
        return;
      }

      dispatch(actions.successProfessions(res));
    })
    .catch(() => {
      dispatch(actions.failedProfessions());
    });
};
