import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';

const LOAD = 'page/LOAD';
const SUCCESS = 'page/SUCCESS';
const FAILED = 'page/FAILED';

const initialState: i.PageState<i.HomePageData | i.AboutPageData> = {
  data: null,
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
    case SUCCESS: {
      const data = action.payload;

      // Filter only published posts
      if (data.posts) {
        data.posts = data.posts.filter((post) => post.published);
      }

      return {
        ...state,
        data,
        error: false,
        loading: false,
      };
    }
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
  success: (page: i.HomePageData) => action(SUCCESS, page),
  failed: () => action(FAILED),
};

export const fetchPage: i.FetchPageAction = (endpoint) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get({ path: `${endpoint}` })
    .then((res) => {
      dispatch(actions.success(res));
    })
    .catch((err) => {
      dispatch(actions.failed());
    });
};
