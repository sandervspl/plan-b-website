import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: createStandardAction('recruitment/LOAD')(),
  failed: createStandardAction('recruitment/FAILED')(),
  success: createStandardAction('recruitment/SUCCESS')<i.RecruitmentData>(),
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
