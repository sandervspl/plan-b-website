import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('dkp/LOAD'),
  // failed: () => action('dkp/FAILED'),
  // success: (streams: i.ActiveStreams) => action('dkp/SUCCESS', streams),

  sendXmlSuccess: () => action('dkp/SEND_XML_SUCCESS'),
  sendXmlFailed: () => action('dkp/SEND_XML_FAILED'),
};

const initialState: i.TwitchState = {
  error: false,
  loading: true,
};

export default (state = initialState, action: ActionType<typeof actions>): i.TwitchState => {
  switch (action.type) {
    case 'dkp/LOAD':
      return {
        ...state,
        error: false,
        loading: true,
      };
    // case 'dkp/FAILED':
    //   return {
    //     ...state,
    //     loading: false,
    //     error: true,
    //   };
    // case 'dkp/SUCCESS':
    //   return {
    //     ...state,
    //     data: action.payload,
    //     error: false,
    //     loading: false,
    //   };
    case 'dkp/SEND_XML_SUCCESS':
      return {
        ...state,
        error: false,
        loading: false,
      };
    case 'dkp/SEND_XML_FAILED':
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
};

export const sendDkpXml: i.SendDkpXml['thunk'] = (file) => async (dispatch, getState, api) => {
  dispatch(actions.load());

  const data = new FormData();
  data.append('file', file);

  return api.methods.post<any>({
    url: api.url.api,
    body: data,
    upload: true,
    path: `${API_ENDPOINT.DKP}`,
  })
    .then(() => {
      dispatch(actions.sendXmlSuccess());
    })
    .catch(() => {
      dispatch(actions.sendXmlFailed());
    });
};
