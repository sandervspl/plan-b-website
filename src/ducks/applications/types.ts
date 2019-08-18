import * as i from 'types';

export type ApplicationsState = i.BaseState<never> & {
  list?: i.ApplicationData[];
  detail?: i.ApplicationDataDuck;
  detailPublic?: i.ApplicationBase;
  userVote?: i.VOTE;
  applicationUuid?: string;
  messages: i.Comment[];
  sendingMessage: boolean;
  locked: boolean;
  loadingMessages: boolean;
};

export type ApplicationStatus = 'open' | 'accepted' | 'rejected';

export type ViewableType = 'private' | 'public';

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
  social: boolean;
}

export type ApplicationData = ApplicationBase & {
  votes: i.Vote[];
  commentsAmount: number;
  public?: {
    id: number;
    applicationId: number;
    uuid: string;
  };
}

export type ApplicationDataDuck = ApplicationBase & {
  votes: {
    accepts: i.Vote[];
    rejects: i.Vote[];
  };
}

export type FetchApplications = i.BaseThunkAction<
  (status: i.ApplicationStatus, type: i.ViewableType) => Promise<i.ApplicationData[] | void>
>;

export type FetchComments = i.BaseThunkAction<
  (applicationId: number, type: i.ViewableType | 'all') => Promise<i.Comment[] | void>
>;

export type SendComment = i.BaseThunkAction<
  (type: i.ViewableType, applicationId: number, comment: string, userId?: string) => Promise<i.Comment | void>
>;

export type SaveVote = i.BaseThunkAction<
  (applicationId: number, userId: string, vote: i.VOTE) => Promise<i.Vote | void>
>;

export type SetStatus = i.BaseThunkAction<
(applicationId: number, status: i.ApplicationStatus) => Promise<i.ApplicationBase | void>
>;
