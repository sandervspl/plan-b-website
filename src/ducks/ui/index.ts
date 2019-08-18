import * as i from 'types';
import { ActionType, action } from 'typesafe-actions';
import { sizes } from 'styles';

export const actions = {
  setWindowSize: (windowSize: i.WindowSize) => action('ui/RESIZE', windowSize),
  setIsMobile: (isMobile: boolean) => action('ui/IS_MOBILE', isMobile),
};

const initialState: i.UiState = {
  windowHeight: 0,
  windowWidth: 0,
  isMobile: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.UiState => {
  switch (action.type) {
    case 'ui/RESIZE':
      return {
        ...state,
        windowWidth: action.payload.width,
        windowHeight: action.payload.height,
        isMobile: action.payload.width < sizes.desktop,
      };
    case 'ui/IS_MOBILE':
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
};
