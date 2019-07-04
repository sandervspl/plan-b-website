import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';

export const actions = {
  load: () => action('character/LOAD'),
  failed: () => action('character/FAILED'),
  success: (character: i.CharacterData) => action('character/SUCCESS', character),
};

const initialState: i.CharacterState = {
  data: undefined,
  error: false,
  loading: false,
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
    default:
      return state;
  }
};

export const fetchCharacter: i.FetchCharacterDuck = (name) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.CharacterData>({
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
