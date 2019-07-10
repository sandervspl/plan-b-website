import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('recruitment/LOAD'),
  failed: () => action('recruitment/FAILED'),
  success: (data: i.RecruitmentData) => action('recruitment/SUCCESS', data),
  classSuccess: (data: i.ClassData) => action('recruitment/CLASS_SUCCESS', data),
};

const initialState: i.RecruitmentState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.RecruitmentState => {
  switch (action.type) {
    case 'recruitment/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'recruitment/FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'recruitment/SUCCESS': {
      const { classes } = action.payload;

      if (!classes) {
        return {
          ...state,
          data: action.payload,
          error: false,
          loading: false,
        };
      }

      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    }
    case 'recruitment/CLASS_SUCCESS': {
      if (!state.data || !state.data.classes) return state;

      // Look for class object we want to replace
      const clsIndex = state.data.classes.map((cls) => cls.id).indexOf(action.payload.id);

      if (clsIndex < 0) return state;

      // Replace class object with new object
      const newClasses = [...state.data.classes];
      newClasses[clsIndex] = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          classes: newClasses,
        },
      };
    }
    default:
      return state;
  }
};

export const fetchRecruitment = (): i.ThunkAction => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.RecruitmentData>({
    url: api.url.cms,
    path: API_ENDPOINT.RECRUITMENT,
  })
    .then((res) => {
      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};

export const fetchRecruitmentClass = (id: i.ContentId): i.ThunkAction => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.ClassData>({
    url: api.url.cms,
    path: `${API_ENDPOINT.CLASS}/${id}`,
  })
    .then((res) => {
      dispatch(actions.classSuccess(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
