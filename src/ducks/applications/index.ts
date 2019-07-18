import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('applications/LOAD'),
  failed: () => action('applications/FAILED'),
  successList: (applications: i.ApplicationData[]) => action('applications/SUCCESS_LIST', applications),

  successDetail: (application: i.ApplicationData) => action('applications/SUCCESS_DETAIL', application),

  resetApplication: () => action('applications/RESET_DETAIL'),

  sendComment: () => action('applications/SEND_COMMENT'),
  sendCommentFailed: () => action('applications/SEND_COMMENT_FAILED'),
  sendCommentSuccess: () => action('applications/SEND_COMMENT_SUCCESS'),
};

const initialState: i.ApplicationsState = {
  data: undefined,
  error: false,
  loading: true,
};

export default (state = initialState, action: ActionType<typeof actions>): i.ApplicationsState => {
  switch (action.type) {
    case 'applications/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'applications/FAILED':
      return {
        ...state,
        data: undefined,
        loading: false,
        error: true,
      };
    case 'applications/SUCCESS_LIST':
      return {
        ...state,
        list: action.payload,
        error: false,
        loading: false,
      };
    case 'applications/SUCCESS_DETAIL':
      return {
        ...state,
        detail: action.payload,
        error: false,
        loading: false,
      };
    case 'applications/RESET_DETAIL':
      return {
        ...state,
        detail: undefined,
      };
    default:
      return state;
  }
};

export const fetchApplications = (status: i.ApplicationStatus): i.ThunkAction => async (
  dispatch, getState, api
) => {
  dispatch(actions.load());

  return api.methods.get<i.ApplicationData[]>({
    url: api.url.api,
    path: `${API_ENDPOINT.APPLICATIONS}/${status}`,
    withAuth: true,
  })
    .then((res) => {
      dispatch(actions.successList(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};

export const fetchApplicationDetail = (id: number): i.ThunkAction =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.methods.get<i.ApplicationData>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${id}`,
      withAuth: true,
    })
      .then((res) => {
        dispatch(actions.successDetail(res));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };

export const sendComment = (applicationId: number, userId: string, comment: string): i.ThunkAction =>
  async (dispatch, getState, api) => {
    dispatch(actions.sendComment());

    return api.methods.post<i.ApplicationData>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationId}/comment`,
      body: {
        userId,
        comment,
      },
      withAuth: true,
    })
      .then(() => {
        dispatch(actions.sendCommentSuccess());
      })
      .catch(() => {
        dispatch(actions.sendCommentFailed());
      });
  };
