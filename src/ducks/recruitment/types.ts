import * as i from 'types';

export type RecruitmentState = i.BaseState<RecruitmentData>;

export type RecruitmentData = {
  id: i.ContentId;
  created_at: Date;
  updated_at: Date;
  title: string;
  warrior: RecruitmentWarriorData;
  shaman: RecruitmentShamanData;
  homepage?: i.ContentId;
};

export type RecruitmentClassData = {
  id: i.ContentId;
  recruitment: i.ContentId;
  created_at: Date;
  updated_at: Date;
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
