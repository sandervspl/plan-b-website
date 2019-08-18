import * as i from 'types';

export type RecruitmentState = i.BaseState<i.RecruitmentData>;

export type RecruitmentData = i.BaseResponseBody & {
  title: string;
  classes?: (BaseClassData | ClassData)[];
  disclaimer?: string;
  empty_state_text?: string;
};

export type BaseClassData = i.BaseResponseBody & {
  recruitment: i.ContentId;
  active: boolean;
  name: string;
  color: i.HexCode;
}

export type ClassData = BaseClassData & {
  icon: i.Image;
}
