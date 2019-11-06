import * as i from 'types';
import { createSelector } from 'reselect';

const getHistory = createSelector(
  (state: i.ReduxState) => state.user.character && state.user.character.dkpHistories,
  (dkpHistory) => dkpHistory,
);

const getAverageDkp = createSelector(
  (state: i.ReduxState) => state.dkp.average,
  (dkpAverage) => dkpAverage,
);

export const totalDkpForGraph = createSelector(
  getHistory,
  (dkpHistory) => {
    if (!dkpHistory) {
      return;
    }

    return dkpHistory
      .sort((a, b) => b.event.time - a.event.time)
      .map((entry) => ({
        xName: 'date',
        date: entry.createdAt,
        yName: 'dkp',
        dkp: entry.net,
      }));
  }
);

export const averageDkpForGraph = createSelector(
  getAverageDkp,
  (dkpAverage) => {
    if (!dkpAverage) {
      return;
    }

    return Object.keys(dkpAverage)
      .sort((a, b) => Number(b) - Number(a))
      .map((key) => ({
        xName: 'date',
        date: dkpAverage[key].date,
        yName: 'dkp',
        dkp: dkpAverage[key].value,
      }));
  }
);
