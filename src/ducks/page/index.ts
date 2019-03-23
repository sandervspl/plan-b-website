import * as i from 'types';
import { action, ActionType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

const LOAD = 'page/LOAD';
const SUCCESS = 'page/SUCCESS';
const FAILED = 'page/FAILED';

const initialState: i.PageState = {
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
  success: (payload: i.ApiDataPayloads) => action(SUCCESS, payload),
  failed: () => action(FAILED),
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
