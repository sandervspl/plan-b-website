import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT, localStorageHelper } from 'services';
import { CommentsStorage } from 'services/localStorage/types';

export const actions = {
  load: () => action('applications/LOAD'),
  failed: () => action('applications/FAILED'),
  successList: (applications: i.ApplicationData[]) => action('applications/SUCCESS_LIST', applications),

  successDetail: (application: i.ApplicationData, userVote?: i.VOTE) =>
    action('applications/SUCCESS_DETAIL', { application, userVote }),
  successDetailPublic: (application: i.ApplicationBase) =>
    action('applications/SUCCESS_DETAIL_PUBLIC', application),

  comments: () => action('applications/COMMENTS'),
  commentsFailed: () => action('applications/COMMENTS_FAILED'),
  commentsSuccess: (messages: i.Comment[]) => action('applications/COMMENTS_SUCCESS', messages),

  resetApplication: () => action('applications/RESET_DETAIL'),

  sendComment: () => action('applications/SEND_COMMENT'),
  sendCommentFailed: () => action('applications/SEND_COMMENT_FAILED'),
  sendCommentSuccess: (newComment: i.Comment) => action('applications/SEND_COMMENT_SUCCESS', newComment),

  deleteComment: (comment: i.Comment) => action('applications/DELETE_COMMENT', comment),

  vote: () => action('applications/VOTE'),
  voteFailed: () => action('applications/VOTE_FAILED'),
  voteSuccess: (newVote: i.Vote) => action('applications/VOTE_SUCCESS', newVote),

  setStatus: () => action('applications/SET_STATUS'),
  setStatusFailed: () => action('applications/SET_STATUS_FAILED'),
  setStatusSuccess: (application: i.ApplicationBase) => action('applications/SET_STATUS_SUCCESS', application),

  setPersonalUuid: (uuid: string) => action('applications/SET_PERSONAL_UUID', uuid),

  setCommentsType: (type: i.CommentType) => action('applications/SET_COMMENTS_TYPE', type),
};

const initialState: i.ApplicationsState = {
  data: undefined,
  error: false,
  loading: false,
  sendingMessage: false,
  userVote: undefined,
  applicationUuid: undefined,
  locked: false,
  messages: [],
  loadingMessages: false,
  detail: undefined,
  commentsType: 'public',
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
      if (action.payload.application.votes) {
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
          locked: action.payload.application.locked,
          userVote: action.payload.userVote,
        };
      }

      return {
        ...state,
        detail: action.payload.application,
        error: false,
        loading: false,
        locked: action.payload.application.locked,
        userVote: action.payload.userVote,
      };
    case 'applications/RESET_DETAIL':
      return initialState;
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
      };
    case 'applications/VOTE_SUCCESS':
      return {
        ...state,
        detail: {
          ...state.detail!,
          votes: {
            accepts: action.payload.vote === i.VOTE.ACCEPT
              ? [action.payload, ...state.detail!.votes!.accepts]
              : state.detail!.votes!.accepts,
            rejects: action.payload.vote === i.VOTE.REJECT
              ? [action.payload, ...state.detail!.votes!.rejects]
              : state.detail!.votes!.rejects,
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
    case 'applications/COMMENTS':
      return {
        ...state,
        loadingMessages: true,
      };
    case 'applications/COMMENTS_FAILED':
      return {
        ...state,
        loadingMessages: false,
        error: true,
      };
    case 'applications/COMMENTS_SUCCESS':
      return {
        ...state,
        loadingMessages: false,
        error: false,
        messages: action.payload,
      };
    case 'applications/DELETE_COMMENT':
      return {
        ...state,
        messages: state.messages.map((message) => {
          if (message.id === action.payload.id) {
            return action.payload;
          }

          return message;
        }),
      };
    case 'applications/SET_COMMENTS_TYPE':
      return {
        ...state,
        commentsType: action.payload,
      };
    default:
      return state;
  }
};

export const fetchApplications: i.FetchApplications = (status) =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.get<i.ApplicationData[]>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATIONS}/${status}`,
    })
      .then((res) => {
        // Add newComments flag if applicable
        const data: i.ApplicationData[] = res.map((application) => {
          const stored = localStorageHelper.comments.get();
          let newComments = false;

          if (stored) {
            const storedApplication = stored.find((app) => (
              app.applicationUuid === application.uuid)
            );

            if (storedApplication) {
              newComments = application.commentsAmount > storedApplication.commentsAmount;
            }
          }

          return {
            ...application,
            newComments,
          };
        });

        // Save new state in localstorage
        const storage: CommentsStorage[] = res.map((application) => ({
          applicationUuid: application.uuid,
          commentsAmount: application.commentsAmount,
        }));

        localStorageHelper.comments.set(storage);

        dispatch(actions.successList(data));
      })
      .catch(() => {
        dispatch(actions.failed());
      });
  };

export const fetchApplicationDetail: i.FetchApplicationDetail = (applicationUuid) =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    return api.get<i.ApplicationData>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationUuid}`,
      withAuth: true,
    })
      .then((res) => {
        const user = getState().user.data;

        if (user) {
          const userVote = res.votes.find((vote) => vote.user.id === user.id);
          let vote: i.ApplicationsState['userVote'];

          if (userVote) {
            vote = userVote.vote;
          }

          dispatch(actions.successDetail(res, vote));

          return;
        }

        dispatch(actions.successDetail(res));
      })
      .catch((err) => {
        if (__DEV__) console.error(err);
        dispatch(actions.failed());
      });
  };

export const fetchComments: i.FetchComments = (type) => async (dispatch, getState, api) => {
  dispatch(actions.comments());

  const application = getState().applications.detail!;

  if (!application) {
    return;
  }

  const { uuid } = application;

  return api.get<i.Comment[]>({
    url: api.url.api,
    path: `${API_ENDPOINT.APPLICATION_DETAIL}/${uuid}/comments`,
    query: { type },
  })
    .then((res) => {
      dispatch(actions.commentsSuccess(res));
    })
    .catch(() => {
      dispatch(actions.commentsFailed());
    });
};

export const sendComment: i.SendComment = (type, comment) =>
  async (dispatch, getState, api) => {
    dispatch(actions.sendComment());

    const isPublic = type === 'public';
    const { uuid } = getState().applications.detail!;
    const { id } = getState().user.data!;

    return api.post<i.Comment>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${uuid}/comment`,
      body: {
        userId: id,
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

export const deleteComment: i.DeleteComment = (id) => async (dispatch, getState, api) => {
  return api.del<i.Comment>({
    url: api.url.api,
    path: `${API_ENDPOINT.COMMENT_DELETE}/${id}`,
    withAuth: true,
  })
    .then((comment) => {
      dispatch(actions.deleteComment(comment));

      return comment;
    })
    .catch(() => {
      // dispatch(actions.sendCommentFailed());
    });
};

export const saveVote: i.SaveVote = (applicationUuid, userId, vote) =>
  async (dispatch, getState, api) => {
    dispatch(actions.vote());

    return api.post<i.Vote>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATION_DETAIL}/${applicationUuid}/vote`,
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

export const setStatus: i.SetStatus = (status) => async (dispatch, getState, api) => {
  dispatch(actions.setStatus());

  const { uuid } = getState().applications.detail!;

  return api.put<i.ApplicationBase>({
    url: api.url.api,
    path: `${API_ENDPOINT.APPLICATION_DETAIL}/${uuid}/status`,
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
