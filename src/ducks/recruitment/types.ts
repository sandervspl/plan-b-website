import * as i from 'types';

export type RecruitmentState = i.BaseState<i.RecruitmentData>;

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
