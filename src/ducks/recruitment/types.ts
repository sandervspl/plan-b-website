import * as i from 'types';

export type RecruitmentState = i.BaseState<RecruitmentData>;

export type RecruitmentData = i.BaseResponseBody & {
  title: string;
  warrior: RecruitmentWarriorData;
  shaman: RecruitmentShamanData;
  homepage?: i.ContentId;
};

export type RecruitmentClassData = i.BaseResponseBody & {
  recruitment: i.ContentId;
}

export type RecruitmentShamanData = RecruitmentClassData & {
  elemental: boolean;
  restoration: boolean;
  enhancement: boolean;
}

export type RecruitmentWarriorData = RecruitmentClassData & {
  arms: boolean;
  fury: boolean;
  protection: boolean;
}
