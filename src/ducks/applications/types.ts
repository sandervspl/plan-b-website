import * as i from 'types';

export type ApplicationsState = i.BaseState<never> & {
  list?: i.ApplicationData[];
  detail?: i.ApplicationDataDuck;
  userVote?: i.VOTE;
  applicationUuid?: string;
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

export type Race = i.BaseResponseBody & {
  name: string;
  icon: i.Image;
}

export type Role = i.BaseResponseBody & {
  name: string;
  icon: i.Image;
}

export type ApplicationProfession = {
  id: number;
  icon: i.Image;
  name: string;
  level: number;
}

type Professions = {
  primary: ApplicationProfession[];
  secondary: ApplicationProfession[];
}

export type CharacterProfessionTypes = keyof Professions;

export type Character = {
  name: string;
  level: number;
  race: i.Race;
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
  reason: string;
}

export type Comment = i.BaseDatabaseBody & {
  applicationId: number;
  text: string;
  user: i.SimpleDatabaseUserData;
}

export enum VOTE { REJECT, ACCEPT }

export type Vote = i.BaseDatabaseBody & {
  applicationId: number;
  vote: i.VOTE;
  user: i.SimpleDatabaseUserData;
}

export type ApplicationBase = i.BaseResponseBody & {
  status: i.ApplicationStatus;
  character: i.Character;
  personal: Personal;
  locked: boolean;
}

export type ApplicationData = ApplicationBase & {
  discussion: i.Comment[];
  votes: i.Vote[];
  commentsAmount: number;
}

export type ApplicationDataDuck = ApplicationBase & {
  discussion: i.Comment[];
  votes: {
    accepts: i.Vote[];
    rejects: i.Vote[];
  };
}
