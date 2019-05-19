import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: createStandardAction('posts/LOAD')(),
  failed: createStandardAction('posts/FAILED')(),
  singleSuccess: createStandardAction('posts/SINGLE_SUCCESS')<i.Post>(),
  listuccess: createStandardAction('posts/LIST_SUCCESS')<i.Post[]>(),
};

const initialState: i.PostsState = {
  error: false,
  loading: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.PostsState => {
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
    case getType(actions.singleSuccess):
      return {
        ...state,
        single: action.payload,
        error: false,
        loading: false,
      };
    case getType(actions.listuccess):
      return {
        ...state,
        list: action.payload,
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
    api.methods.get({
      url: api.url.cms,
      path: `${API_ENDPOINT.POSTS}/${id}`,
    })
  ));

  return Promise.all<i.Post>(fetches)
    .then((res) => {
      dispatch(actions.listuccess(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
