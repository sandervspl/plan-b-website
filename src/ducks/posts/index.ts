import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('posts/LOAD'),
  failed: () => action('posts/FAILED'),
  singleSuccess: (post: i.Post) => action('posts/SINGLE_SUCCESS', post),
  listuccess: (posts: i.Post[]) => action('posts/LIST_SUCCESS', posts),
};

const initialState: i.PostsState = {
  data: [],
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.PostsState => {
  switch (action.type) {
    case 'posts/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'posts/FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'posts/SINGLE_SUCCESS':
      return {
        ...state,
        single: action.payload,
        error: false,
        loading: false,
      };
    case 'posts/LIST_SUCCESS':
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

export const fetchPosts = (ids: number[]): i.ThunkAction => async (dispatch, getState, api) => {
  dispatch(actions.load());

  const fetches = ids.map((id) => (
    api.methods.get<i.Post>({
      url: api.url.cms,
      path: `${API_ENDPOINT.POSTS}/${id}`,
    })
  ));

  return Promise.all(fetches)
    .then((res) => {
      dispatch(actions.listuccess(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
