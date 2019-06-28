import * as i from 'types';
import { ActionType, action, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('page/LOAD'),
  success: (pageData: i.ApiDataPayloads) => action('page/SUCCESS', pageData),
  failed: () => action('page/FAILED'),
};

const initialState: i.PageState = {
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.PageState => {
  switch (action.type) {
    case 'page/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'page/SUCCESS': {
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
    case 'page/FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
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

  return api.methods.get<i.PagesBody>({
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
