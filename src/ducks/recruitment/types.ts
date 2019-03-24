import * as i from 'types';

export type RecruitmentState = i.BaseState<i.RecruitmentData> & {
  character?: i.CharacterData;
};

export type RecruitmentData = i.BaseResponseBody & RecruitmentClasses & {
  active: boolean;
  title?: string;
  homepage?: i.ContentId;
};

export type PlayerClasses = 'druid' | 'hunter' | 'mage' | 'priest' | 'rogue' | 'shaman' | 'warlock' | 'warrior';

type RecruitmentClasses = {
  [key in PlayerClasses]?: i.RecruitmentClassData;
}

type RecruitmentClassSpec = {
  [key: string]: boolean;
}

export type RecruitmentClassData = i.BaseResponseBody & RecruitmentClassSpec & {
  recruitment: i.ContentId;
}

export type PlayerClassesSpecs = {
  [key in PlayerClasses]?: {
    [x: string]: boolean;
  };
}

export type CharacterData = {
  lastModified: number;
  name: string;
  realm: string;
  battlegroup: string;
  class: number;
  race: number;
  gender: number;
  level: number;
  achievementPoints: number;
  thumbnail: string;
  calcClass: string;
  faction: number;
  guild: {
    name: string;
    realm: string;
    battlegroup: string;
    members: number;
    achievementPoints: number;
    emblem: {
      icon: number;
      iconColor: string;
      iconColorId: number;
      border: number;
      borderColor: string;
      borderColorId: number;
      backgroundColor: string;
      backgroundColorId: number;
    };
  };
  totalHonorableKills: number;
}

export type FetchCharacterDuck = (name: string) => i.ThunkAction<Promise<void>>;
export type FetchCharacter = (name: string) => Promise<void>;
