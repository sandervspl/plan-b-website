import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

const initialState: i.PageState = {
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
    case getType(actions.success): {
      if (action.payload.home) {
        const home = action.payload.home;

        // Filter only published posts
        if (home.posts) {
          home.posts = home.posts.filter((post) => post.published);
        }
      }

      return {
        ...state,
        ...action.payload,
        error: false,
        loading: false,
      };
    }
    case getType(actions.failed):
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
  load: createStandardAction('page/LOAD')(),
  success: createStandardAction('page/SUCCESS')<i.ApiDataPayloads>(),
  failed: createStandardAction('page/FAILED')(),
};

const generatePayload: i.GeneratePayload = (endpoint, payload) => {
  let key: i.PageKeys;

  switch (endpoint) {
    case API_ENDPOINT.HOME: key = 'home'; break;
    case API_ENDPOINT.ABOUT: key = 'about'; break;
    case API_ENDPOINT.APPLICATION: key = 'application'; break;
    default: throw new Error(`No key found for endpoint: ${endpoint}`);
  }

  return { [key]: payload };
};

export const fetchPage: i.FetchPageAction = (endpoint) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get<i.PagesBody>({
    url: api.url.cms,
    path: `${endpoint}`,
  })
    .then((res) => {
      dispatch(actions.success(generatePayload(endpoint, res)));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
