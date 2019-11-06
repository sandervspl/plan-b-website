import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('dkp/LOAD'),
  failed: () => action('dkp/FAILED'),

  sendXmlSuccess: () => action('dkp/SEND_XML_SUCCESS'),
  sendXmlFailed: (errorMsg: string) => action('dkp/SEND_XML_FAILED', errorMsg),

  guildDkpAvgSuccess: (avg: i.GuildDkpAvgResponse) => action('dkp/GUILD_DKP_AVG_SUCCESS', avg),
  guildDkpAvgFailed: () => action('dkp/GUILD_DKP_AVG_FAILED'),
};

const initialState: i.DkpState = {
  error: false,
  loading: true,
  average: {},
};

export default (state = initialState, action: ActionType<typeof actions>): i.DkpState => {
  switch (action.type) {
    case 'dkp/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    case 'dkp/SEND_XML_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
      };
    case 'dkp/SEND_XML_FAILED':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case 'dkp/GUILD_DKP_AVG_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
        average: action.payload,
      };
    case 'dkp/GUILD_DKP_AVG_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const sendDkpXml: i.SendDkpXml = (file, eventName) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  const data = new FormData();
  data.append('file', file);
  data.append('name', eventName);

  return api.post({
    url: api.url.api,
    body: data,
    upload: true,
    path: `${API_ENDPOINT.DKP}`,
  })
    .then((response) => {
      dispatch(actions.sendXmlSuccess());

      return response;
    })
    .catch((err) => {
      const msg = err && err.message ? err.message : 'Something went wrong. Try again later.';
      dispatch(actions.sendXmlFailed(msg));
    });
};

export const getGuildAverageDkp: i.GetGuildAverageDkp = () => async (dispatch, getState, api) => {
  dispatch(actions.load());

  return api.get<i.GuildDkpAvgResponse>({
    url: api.url.api,
    path: `${API_ENDPOINT.DKP_GUILD_AVG}`,
  })
    .then((response) => {
      dispatch(actions.guildDkpAvgSuccess(response));

      return response;
    })
    .catch(() => {
      dispatch(actions.guildDkpAvgFailed());
    });
};
