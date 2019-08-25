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
      .sort((a, b) => b.exportTime - a.exportTime)
      .map((entry) => ({
        xName: 'date',
        date: entry.updatedAt,
        yName: 'dkp',
        dkp: entry.total,
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
