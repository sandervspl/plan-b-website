import * as i from 'types';

export type ApplicationsState = i.BaseState<i.ApplicationData[]>;

export type ApplicationStatus = 'open' | 'accepted' | 'rejected';

export type RaidExperience = {
  molten_core?: boolean;
  onyxia?: boolean;
  blackwing_lair?: boolean;
  zul_gurub?: boolean;
  aq_20?: boolean;
  aq_40?: boolean;
  naxxramas?: boolean;
}

export type Class = i.BaseResponseBody & {
  name: string;
  color: string;
  recruitment: number;
  icon: i.Image;
}

type Profession = {
  name?: string;
  level?: number;
}

export type Professions = {
  primary: Profession[];
  secondary: Profession[];
}

type Character = {
  name: string;
  level: number;
  race: string;
  class: i.Class;
  role: string;
  professions: i.Professions;
  server: string;
  raidExperience: i.RaidExperience;
}

type Personal = {
  name: string;
  age: number;
  story: string;
}

export type ApplicationData = i.BaseResponseBody & {
  character: Character;
  personal: Personal;
}
