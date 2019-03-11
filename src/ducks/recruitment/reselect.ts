import * as i from 'types';
import { createSelector } from 'reselect';
import _ from 'lodash';

export const getRecruitmentClassSpecs = createSelector<i.ReduxState, i.RecruitmentState, any>(
  (state) => state.recruitment,
  (state) => {
    // Remove data that is not player classes
    const data = _.omit(state.data, 'created_at', 'homepage', 'id', 'title', 'updated_at');
    const classKeys = Object.keys(data);

    classKeys.forEach((key) => {
      const classData: i.RecruitmentClassData = data[key];

      // Remove data that is not related to class specs
      Object.keys(classData).forEach((classDataKey) => {
        if (typeof classData[classDataKey] !== 'boolean') {
          delete classData[classDataKey];
        }
      });
    });

    return data;
  },
);
