import * as i from 'types';
import { createSelector } from 'reselect';

export const hasProfessions = createSelector(
  (state: i.ReduxState, type: i.CharacterProfessionTypes) => (
    [state.applications.detail, type] as const
  ),
  ([application, type]) => {
    if (!application) return false;

    return !!application.character.professions[type].find((profession) => !!profession.name);
  }
);
