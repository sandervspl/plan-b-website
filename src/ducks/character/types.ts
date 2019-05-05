import * as i from 'types';

export { CharacterData, Professions, Profession, Items, Item } from './characterType';

export type CharacterState = i.BaseState<i.CharacterData>;

export type FetchCharacterDuck = (name: string) => i.ThunkAction<Promise<void>>;
export type FetchCharacter = (name: string) => Promise<void>;
