import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('twitch/LOAD'),
  failed: () => action('twitch/FAILED'),
  success: (streams: i.ActiveStreams) => action('twitch/SUCCESS', streams),
};

const initialState: i.TwitchState = {
  error: false,
  loading: true,
};

export default (state = initialState, action: ActionType<typeof actions>): i.TwitchState => {
  switch (action.type) {
    case 'twitch/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'twitch/FAILED':
      return {
        ...state,
        loading: false,
        error: true,
      };
    case 'twitch/SUCCESS':
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

export const fetchActiveStreams: i.fetchActiveStreams['thunk'] = () => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.methods.get<i.ActiveStreams>({
    url: api.url.api,
    path: `${API_ENDPOINT.ACTIVE_STREAMS}`,
  })
    .then((activeStreams) => {
      dispatch(actions.success(activeStreams));

      return activeStreams;
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
