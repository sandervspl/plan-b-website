import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services/api/endpoints';

const LOAD = 'recruitment/LOAD';
const SUCCESS = 'recruitment/SUCCESS';
const FAILED = 'recruitment/FAILED';

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
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    case FAILED:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export const actions = {
  load: () => action(LOAD),
  success: (page: i.RecruitmentData) => action(SUCCESS, page),
  failed: () => action(FAILED),
};

export const fetchRecruitment = (): i.ThunkAction => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get({ path: `${API_ENDPOINT.RECRUITMENT}` })
    .then((res) => {
      dispatch(actions.success(res));
    })
    .catch((err) => {
      dispatch(actions.failed());
    });
};
