import * as i from 'types';
import { ActionType, createStandardAction, getType } from 'typesafe-actions';

const initialState: i.UiState = {
  windowHeight: 0,
  windowWidth: 0,
};

export default (state = initialState, action: ActionType<typeof actions>): i.UiState => {
  switch (action.type) {
    case getType(actions.setWindowSize):
      return {
        ...state,
        windowWidth: action.payload.width,
        windowHeight: action.payload.height,
      };
    default:
      return state;
  }
};

export const actions = {
  setWindowSize: createStandardAction('ui/WINDOW_SIZE')<i.WindowSize>(),
};
