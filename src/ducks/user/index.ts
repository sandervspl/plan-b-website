import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: createStandardAction('user/LOAD')(),
  failed: createStandardAction('user/FAILED')(),
  success: createStandardAction('user/SUCCESS')<i.UserData>(),
};

const initialState: i.RecruitmentState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>) => {
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

export const fetchUser: i.FetchUserDuck = () => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.UserData>({
    url: api.url.api,
    path: `${API_ENDPOINT.AUTH_USER}`,
    withAuth: true,
  })
    .then((res) => {
      dispatch(actions.success(res));

      return res;
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
