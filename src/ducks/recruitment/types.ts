import * as i from 'types';

export type RecruitmentState = i.BaseState<RecruitmentData>;

export type RecruitmentData = i.BaseResponseBody & {
  title: string;
  warrior: RecruitmentClassData;
  shaman: RecruitmentClassData;
  homepage?: i.ContentId;
};

export type RecruitmentClassData = i.BaseResponseBody & {
  recruitment: i.ContentId;
  [x: string]: any; // boolean
}
