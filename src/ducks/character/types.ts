import * as i from 'types';

export { CharacterData, Professions, ArmoryProfession, Items, Item } from './characterType';

export type CharacterState = i.BaseState<i.CharacterData> & {
  professions: CmsProfession[];
};

export type CmsProfession = i.BaseResponseBody & {
  name: string;
  primary: boolean;
  icon: i.Image;
}

export type FetchCharacter = i.BaseThunkAction<(name: string) => Promise<void>>;

export type FetchProfessions = i.BaseThunkAction<() => Promise<void>>;
