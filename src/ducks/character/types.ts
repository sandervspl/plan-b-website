import * as i from 'types';

export { CharacterData, Professions, ArmoryProfession, Items, Item } from './characterType';

export type CharacterState = i.BaseState<i.CharacterData>;

export type FetchCharacter<T = Promise<void>> = (name: string) => T;
export type FetchCharacterDuck = FetchCharacter<i.ThunkAction<Promise<void>>>;
