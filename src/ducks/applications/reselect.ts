import * as i from 'types';
import { createSelector } from 'reselect';

export const hasProfessions = createSelector(
  (application: i.ApplicationBase, type: i.CharacterProfessionTypes) => (
    [application, type] as const
  ),
  ([application, type]) => {
    if (!application) return false;

    return application.character.professions[type].length > 0;
  }
);
