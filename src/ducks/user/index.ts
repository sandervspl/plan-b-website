import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('user/LOAD'),
  failed: () => action('user/FAILED'),
  success: (user: i.UserData) => action('user/SUCCESS', user),

  loadCharacter: () => action('user/CHARACTER_LOAD'),
  successCharacter: (character: i.UserCharacterData) => action('user/CHARACTER_SUCCESS', character),
};

const initialState: i.UserState = {
  error: false,
  loading: true,
  loadingCharacter: true,
  isSignedIn: false,
  isAdmin: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.UserState => {
  switch (action.type) {
    case 'user/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'user/FAILED':
      return {
        ...state,
        loading: false,
        loadingCharacter: false,
        error: true,
      };
    case 'user/SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
        isSignedIn: true,
        isAdmin: action.payload.authLevel > i.AUTH_LEVEL.USER,
      };
    case 'user/CHARACTER_LOAD':
      return {
        ...state,
        error: false,
        loadingCharacter: true,
      };
    case 'user/CHARACTER_SUCCESS':
      return {
        ...state,
        character: action.payload,
        error: false,
        loadingCharacter: false,
      };
    default:
      return state;
  }
};

export const fetchUser: i.FetchUser = () => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get<i.UserData>({
    url: api.url.api,
    path: `${API_ENDPOINT.AUTH_USER}`,
    withAuth: true,
    // headers: {
    //   cookie,
    // },
  })
    .then((user) => {
      if (!user.id) {
        dispatch(actions.failed());
        return;
      }

      dispatch(actions.success(user));

      return user;
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};

export const getUserCharacter: i.FetchUserCharacter = () => async (dispatch, getState, api) => {
  dispatch(actions.loadCharacter());

  return api.get<i.UserCharacterData>({
    url: api.url.api,
    path: `${API_ENDPOINT.CHARACTER}`,
    withAuth: true,
    // headers: {
    //   cookie,
    // },
  })
    .then((character) => {
      dispatch(actions.successCharacter(character));

      return character;
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
