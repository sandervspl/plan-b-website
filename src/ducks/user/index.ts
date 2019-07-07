import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('user/LOAD'),
  failed: () => action('user/FAILED'),
  success: (user: i.UserData) => action('user/SUCCESS', user),
};

const initialState: i.UserState = {
  error: false,
  loading: true,
  isSignedIn: false,
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
        error: true,
      };
    case 'user/SUCCESS':
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
        isSignedIn: true,
      };
    default:
      return state;
  }
};

export const fetchUser: i.FetchUser['thunk'] = () => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.UserData>({
    url: api.url.api,
    path: `${API_ENDPOINT.AUTH_USER}`,
    withAuth: true,
  })
    .then((user) => {
      dispatch(actions.success(user));

      return user;
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
