import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('applications/LOAD'),
  failed: () => action('applications/FAILED'),
  successList: (applications: i.ApplicationData[]) => action('applications/SUCCESS_LIST', applications),

  successDetail: (application: i.ApplicationData, userVote: i.VOTE | undefined) =>
    action('applications/SUCCESS_DETAIL', { application, userVote }),
  successDetailPublic: (application: i.ApplicationBase) =>
    action('applications/SUCCESS_DETAIL_PUBLIC', application),

  successComments: (messages: i.Comment[]) => action('applications/SUCCESS_MESSAGES', messages),

  resetApplication: () => action('applications/RESET_DETAIL'),

  sendComment: () => action('applications/SEND_COMMENT'),
  sendCommentFailed: () => action('applications/SEND_COMMENT_FAILED'),
  sendCommentSuccess: (newComment: i.Comment) => action('applications/SEND_COMMENT_SUCCESS', newComment),

  vote: () => action('applications/VOTE'),
  voteFailed: () => action('applications/VOTE_FAILED'),
  voteSuccess: (newVote: i.Vote) => action('applications/VOTE_SUCCESS', newVote),

  setStatus: () => action('applications/SET_STATUS'),
  setStatusFailed: () => action('applications/SET_STATUS_FAILED'),
  setStatusSuccess: (application: i.ApplicationBase) => action('applications/SET_STATUS_SUCCESS', application),

  setPersonalUuid: (uuid: string) => action('applications/SET_PERSONAL_UUID', uuid),
};

const initialState: i.ApplicationsState = {
  data: undefined,
  error: false,
  loading: true,
  sendingMessage: false,
  userVote: undefined,
  applicationUuid: undefined,
  messages: [],
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
        detail: {
          ...action.payload.application,
          votes: {
            accepts: action.payload.application.votes.filter((vote) => vote.vote === i.VOTE.ACCEPT),
            rejects: action.payload.application.votes.filter((vote) => vote.vote === i.VOTE.REJECT),
          },
        },
        error: false,
        loading: false,
        userVote: action.payload.userVote,
      };
    case 'applications/SUCCESS_DETAIL_PUBLIC':
      return {
        ...state,
        detailPublic: action.payload,
      };
    case 'applications/RESET_DETAIL':
      return {
        ...state,
        detail: undefined,
        detailPublic: undefined,
      };
    case 'applications/SEND_COMMENT':
      return {
        ...state,
        sendingMessage: true,
      };
    case 'applications/SEND_COMMENT_FAILED':
      return {
        ...state,
        sendingMessage: false,
      };
    case 'applications/SEND_COMMENT_SUCCESS':
      return {
        ...state,
        sendingMessage: false,
        messages: [
          action.payload,
          ...state.messages,
        ],
      };
    case 'applications/VOTE_SUCCESS':
      return {
        ...state,
        detail: {
          ...state.detail!,
          votes: {
            accepts: action.payload.vote === i.VOTE.ACCEPT
              ? [action.payload, ...state.detail!.votes.accepts]
              : state.detail!.votes.accepts,
            rejects: action.payload.vote === i.VOTE.REJECT
              ? [action.payload, ...state.detail!.votes.accepts]
              : state.detail!.votes.accepts,
          },
        },
        userVote: action.payload.vote,
      };
    case 'applications/SET_STATUS_SUCCESS':
      return {
        ...state,
        detail: {
          ...state.detail!,
          status: action.payload.status,
          locked: action.payload.locked,
        },
      };
    case 'applications/SET_PERSONAL_UUID':
      return {
        ...state,
        applicationUuid: action.payload,
      };
    case 'applications/SUCCESS_MESSAGES':
      return {
        ...state,
        messages: action.payload,
      };
    default:
      return state;
  }
};

export const fetchApplications = (status: i.ApplicationStatus): i.ThunkAction =>
  async (dispatch, getState, api) => {
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
        const user = getState().user.data!;
        const userVote = res.votes.find((vote) => vote.user.id === user.id);
        let vote: i.ApplicationsState['userVote'];

        if (userVote) {
          vote = userVote.vote;
        }

        dispatch(actions.successDetail(res, vote));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };

export const fetchPublicApplicationDetail = (uuid: string): i.ThunkAction =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.methods.get<i.ApplicationBase>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL_PUBLIC}/${uuid}`,
    })
      .then((res) => {
        dispatch(actions.successDetailPublic(res));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };

export const getComments: i.GetComments['thunk'] = (id, type) =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.methods.get<i.Comment[]>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${id}/messages`,
      query: { type },
    })
      .then((res) => {
        dispatch(actions.successComments(res));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };

export const sendComment: i.SendComment['thunk'] = (type, applicationId, comment, userId) =>
  async (dispatch, getState, api) => {
    dispatch(actions.sendComment());

    const isPublic = type === 'public';

    return api.methods.post<i.Comment>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationId}/comment`,
      body: {
        userId,
        comment,
        isPublic,
      },
      withAuth: !isPublic,
    })
      .then((res) => {
        dispatch(actions.sendCommentSuccess(res));

        return res;
      })
      .catch(() => {
        dispatch(actions.sendCommentFailed());
      });
  };

export const saveVote: i.SaveVote['thunk'] = (applicationId, userId, vote) =>
  async (dispatch, getState, api) => {
    dispatch(actions.vote());

    return api.methods.post<i.Vote>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationId}/vote`,
      body: {
        userId,
        vote,
      },
      withAuth: true,
    })
      .then((res) => {
        dispatch(actions.voteSuccess(res));

        return res;
      })
      .catch(() => {
        dispatch(actions.voteFailed());
      });
  };

export const setStatus: i.SetStatus['thunk'] = (applicationId, status) =>
  async (dispatch, getState, api) => {
    dispatch(actions.setStatus());

    return api.methods.put<i.ApplicationBase>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationId}/status`,
      body: {
        status,
      },
      withAuth: true,
    })
      .then((res) => {
        dispatch(actions.setStatusSuccess(res));

        return res;
      })
      .catch(() => {
        dispatch(actions.setStatusFailed());
      });
  };
