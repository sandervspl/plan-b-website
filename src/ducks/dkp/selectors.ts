import * as i from 'types';
import { createSelector } from 'reselect';

export const averageDkpForGraph = createSelector(
  (state: i.ReduxState) => state.dkp.average,
  (dkpAverages) => {
    return Object.keys(dkpAverages)
      .sort((a, b) => Number(b) - Number(a))
      .map((entry) => ({
        xName: 'date',
        date: dkpAverages[entry].date,
        yName: 'dkp',
        dkp: Math.round(dkpAverages[entry].value),
      }));
  }
);
