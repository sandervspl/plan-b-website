import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';

const initialState: i.CharacterState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.CharacterState => {
  switch (action.type) {
    case getType(actions.load):
      return {
        ...state,
        error: false,
        loading: true,
      };
    case getType(actions.failed):
      return {
        ...state,
        data: undefined,
        loading: false,
        error: true,
      };
    case getType(actions.success):
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
  load: createStandardAction('character/LOAD')(),
  failed: createStandardAction('character/FAILED')(),
  success: createStandardAction('character/SUCCESS')<i.CharacterData>(),
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

      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
