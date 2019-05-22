import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: createStandardAction('recruitment/LOAD')(),
  failed: createStandardAction('recruitment/FAILED')(),
  success: createStandardAction('recruitment/SUCCESS')<i.RecruitmentData>(),
  classSuccess: createStandardAction('recruitment/CLASS_SUCCESS')<i.ClassData>(),
};

const initialState: i.RecruitmentState = {
  data: undefined,
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.RecruitmentState => {
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
    case getType(actions.success): {
      const { classes } = action.payload;

      if (!classes) {
        return {
          ...state,
          data: action.payload,
          error: false,
          loading: false,
        };
      }

      const newClasses = classes.filter((cls) => cls.active);
      action.payload.classes = newClasses;

      return {
        ...state,
        data: action.payload,
        error: false,
        loading: false,
      };
    }
    case getType(actions.classSuccess): {
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
    path: `${API_ENDPOINT.RECRUITMENT}`,
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
