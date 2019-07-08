import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
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

      const pageKey = Object.keys(action.payload)[0];
      const meta = (action.payload[pageKey] as i.BasePageData).meta;

      return {
        ...state,
        ...action.payload,
        meta,
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
    case API_ENDPOINT.LOGIN: key = 'login'; break;
    default: throw new Error(`No key found for endpoint: ${endpoint}`);
  }

  return { [key]: payload };
};

export function fetchPage<T extends i.PagesBody = i.PagesBody>(endpoint: API_ENDPOINT): i.ThunkAction<Promise<T | void>> {
  return async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.methods.get<i.PagesBody>({
      url: api.url.cms,
      path: endpoint,
    })
      .then((res) => {
        dispatch(actions.success(generatePayload(endpoint, res)));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };
};
