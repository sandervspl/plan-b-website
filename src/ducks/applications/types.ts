import * as i from 'types';

export type ApplicationsState = i.BaseState<never> & {
  list?: i.ApplicationData[];
  detail?: i.ApplicationData;
};

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

export type Role = i.BaseResponseBody & {
  name: string;
  icon: i.Image;
}

export type ApplicationProfession = {
  name?: string;
  level?: number;
}

type Professions = {
  primary: ApplicationProfession[];
  secondary: ApplicationProfession[];
}

export type CharacterProfessionTypes = keyof Professions;

export type Character = {
  name: string;
  level: number;
  race: string;
  class: i.Class;
  role: i.Role;
  professions: Professions;
  server: string;
  raidExperience: i.RaidExperience;
}

type Personal = {
  name: string;
  age: number;
  story: string;
}

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  applicationId: number;
  text: string;
  user: i.DatabaseUserData;
}

export type ApplicationData = i.BaseResponseBody & {
  status: i.ApplicationStatus;
  character: Character;
  personal: Personal;
  discussion: Comment[];
}
