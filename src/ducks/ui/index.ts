import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';
import { sizes } from 'styles';

export const actions = {
  setWindowSize: createStandardAction('ui/RESIZE')<i.WindowSize>(),
  setIsMobile: createStandardAction('ui/IS_MOBILE')<boolean>(),
};

const initialState: i.UiState = {
  windowHeight: 0,
  windowWidth: 0,
  isMobile: false,
};

export default (state = initialState, action: ActionType<typeof actions>): i.UiState => {
  switch (action.type) {
    case getType(actions.setWindowSize):
      return {
        ...state,
        windowWidth: action.payload.width,
        windowHeight: action.payload.height,
        isMobile: action.payload.width < sizes.desktop,
      };
    case getType(actions.setIsMobile):
      return {
        ...state,
        isMobile: action.payload,
      };
    default:
      return state;
  }
};
