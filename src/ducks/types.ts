import * as i from 'types';

export type ReduxState = {
  page: i.PageState;
  recruitment: i.RecruitmentState;
}

export type BaseState<T> = {
  data: T | null;
  error: boolean;
  loading: boolean;
}
