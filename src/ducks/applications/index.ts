import * as i from 'types';
import qs from 'qs';
import _ from 'lodash';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT, localStorageHelper } from 'services';

export const actions = {
  load: () => action('applications/LOAD'),
  failed: () => action('applications/FAILED'),
  successList: (applications: i.ApplicationData[]) =>
    action('applications/SUCCESS_LIST', applications),
  successPaginationList: (applications: i.ApplicationData[]) =>
    action('applications/SUCCESS_PAGINATION_LIST', applications),

  successDetail: (application: i.ApplicationData, userVote?: i.VOTE) =>
    action('applications/SUCCESS_DETAIL', { application, userVote }),
  successDetailPublic: (application: i.ApplicationBase) =>
    action('applications/SUCCESS_DETAIL_PUBLIC', application),

  comments: () => action('applications/COMMENTS'),
  commentsFailed: () => action('applications/COMMENTS_FAILED'),
  commentsSuccess: (data: i.FetchCommentsResponse, newComments: i.NewComments) =>
    action('applications/COMMENTS_SUCCESS', { data, newComments }),

  resetApplication: () => action('applications/RESET_DETAIL'),

  sendComment: () => action('applications/SEND_COMMENT'),
  sendCommentFailed: () => action('applications/SEND_COMMENT_FAILED'),
  sendCommentSuccess: (newComment: i.Comment) =>
    action('applications/SEND_COMMENT_SUCCESS', newComment),

  deleteComment: (comment: i.Comment) => action('applications/DELETE_COMMENT', comment),

  vote: () => action('applications/VOTE'),
  voteFailed: () => action('applications/VOTE_FAILED'),
  voteSuccess: (newVote: i.Vote) => action('applications/VOTE_SUCCESS', newVote),

  setStatus: () => action('applications/SET_STATUS'),
  setStatusFailed: () => action('applications/SET_STATUS_FAILED'),
  setStatusSuccess: (application: i.ApplicationBase) =>
    action('applications/SET_STATUS_SUCCESS', application),

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
  comments: {
    messages: [],
    count: {
      public: 0,
      private: 0,
    },
  },
  loadingComments: false,
  list: [],
  detail: undefined,
  commentsType: 'public',
  newComments: {
    public: false,
    private: false,
  },
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
    case 'applications/SUCCESS_PAGINATION_LIST':
      return {
        ...state,
        list: [...state.list, ...action.payload],
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
          userVote: action.payload.userVote,
        };
      }

      return {
        ...state,
        detail: action.payload.application,
        error: false,
        loading: false,
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
        loadingComments: true,
      };
    case 'applications/COMMENTS_FAILED':
      return {
        ...state,
        loadingComments: false,
        error: true,
      };
    case 'applications/COMMENTS_SUCCESS':
      return {
        ...state,
        loadingComments: false,
        error: false,
        comments: action.payload.data,
        newComments: action.payload.newComments,
      };
    case 'applications/DELETE_COMMENT':
      return {
        ...state,
        comments: {
          ...state.comments,
          messages: state.comments!.messages.map((message) => {
            if (message.id === action.payload.id) {
              return action.payload;
            }

            return message;
          }),
        },
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

export const fetchApplications: i.FetchApplications = (status, page = 0) =>
  async (dispatch, getState, api) => {
    dispatch(actions.load());

    const limit = 10;
    const queries = qs.stringify({
      limit,
      start: limit * page,
    });

    return api.get<i.ApplicationData[]>({
      url: api.url.api,
      path: `${API_ENDPOINT.APPLICATIONS}/${status}?${queries}`,
    })
      .then((res) => {
        // Notifications
        if (status === 'open') {
          const storage = localStorageHelper.applicationsOverview.get();
          let result: i.ApplicationsOverviewStorage[] = [];

          if (storage) {
            const appMap = res.map((app) => ({
              applicationUuid: app.uuid,
              comments: app.comments.public + app.comments.private,
            }));

            // Update existing applications
            const intersect = _.intersectionBy(appMap, storage, 'applicationUuid');

            const updatedApps = storage.map((app) => {
              const newApp = intersect.find((int) => int.applicationUuid === app.applicationUuid);

              if (newApp) {
                return {
                  ...app,
                  comments: newApp.comments,
                  newComments: app.newComments || newApp.comments > app.comments,
                };
              }

              return app;
            });

            // Add new applications
            const newApps = _
              .differenceBy(appMap, updatedApps, 'applicationUuid')
              .map((app) => ({
                applicationUuid: app.applicationUuid,
                seen: false,
                newComments: true,
                comments: app.comments,
              }));

            result = _.unionBy(updatedApps, newApps, 'applicationUuid');
          } else {
            result = res.map((app) => ({
              applicationUuid: app.uuid,
              seen: false,
              newComments: app.comments.public + app.comments.private > 0,
              comments: app.comments.public + app.comments.private,
            }));
          }

          localStorageHelper.applicationsOverview.set(result);
        }

        if (page === 0) {
          dispatch(actions.successList(res));
        } else {
          dispatch(actions.successPaginationList(res));
        }
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

        // Set application as "seen"
        const storage = localStorageHelper.applicationsOverview.get(applicationUuid);

        if (storage) {
          storage.seen = true;
          localStorageHelper.applicationsOverview.save(storage);
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

  return api.get<i.FetchCommentsResponse>({
    url: api.url.api,
    path: `${API_ENDPOINT.APPLICATION_DETAIL}/${uuid}/comments`,
    query: { type },
  })
    .then((comments) => {
      // Save new data in localstorage
      const stored = localStorageHelper.applications.get();
      const storedApp = stored && stored.find((app) => app.applicationUuid === uuid);

      const newComments = {
        public: false,
        private: false,
      };

      if (storedApp) {
        newComments.public = comments.count.public > storedApp.commentsCount.public;

        if (comments.count.private && storedApp.commentsCount.private) {
          newComments.private = comments.count.private > storedApp.commentsCount.private;
        }
      }

      localStorageHelper.applications.save([{
        applicationUuid: uuid,
        commentsCount: {
          public: comments.count.public,
          private: comments.count.private || 0,
        },
      }]);


      // Set comments in overview as "seen"
      const storage = localStorageHelper.applicationsOverview.get(application.uuid);

      if (storage) {
        storage.newComments = false;

        if (comments) {
          storage.comments = comments.count.public + (comments.count.private || 0);
        }

        localStorageHelper.applicationsOverview.save(storage);
      }

      dispatch(actions.commentsSuccess(comments, newComments));

      return comments;
    })
    .catch((err) => {
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
