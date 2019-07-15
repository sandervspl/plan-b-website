import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { API_ENDPOINT } from 'services';

export const actions = {
  load: () => action('applications/LOAD'),
  failed: () => action('applications/FAILED'),
  success: (applications: i.ApplicationData[]) => action('applications/SUCCESS', applications),
};

const initialState: i.ApplicationsState = {
  data: undefined,
  error: false,
  loading: false,
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
    case 'applications/SUCCESS':
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
      dispatch(actions.success(res));
    })
    .catch(() => {
      dispatch(actions.failed());
    });
};
