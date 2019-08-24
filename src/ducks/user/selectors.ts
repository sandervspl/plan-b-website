import * as i from 'types';
import { createSelector } from 'reselect';

const getHistory = createSelector(
  (state: i.ReduxState) => state.user.character && state.user.character.dkpHistories,
  (dkpHistory) => dkpHistory,
);

export const totalDkpForGraph = createSelector(
  getHistory,
  (dkpHistory) => {
    if (!dkpHistory) {
      return;
    }

    return dkpHistory
      .sort((a, b) => new Date(a.updated_at).getTime() - new Date(b.updated_at).getTime())
      .map((entry) => ({
        xName: entry.updated_at,
        xValue: entry.updated_at,
        yName: 'dkp',
        yValue: entry.total,
      }));
  }
);

export const averageDkpForGraph = createSelector(
  getHistory,
  (dkpHistory) => {
    if (!dkpHistory) {
      return;
    }

    // @TODO This data has to be calculated on the server
  }
);
