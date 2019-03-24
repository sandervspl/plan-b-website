import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

const LOAD = 'recruitment/LOAD';
const FAILED = 'recruitment/FAILED';
const SUCCESS = 'recruitment/SUCCESS';

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
  success: (page: i.RecruitmentData) => action(SUCCESS, page),
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
