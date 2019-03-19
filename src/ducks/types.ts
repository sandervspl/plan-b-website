import * as i from 'types';

export * from 'ducks/page/types';
export * from 'ducks/recruitment/types';

export type ReduxState = {
  page: i.PageState;
  recruitment: i.RecruitmentState;
}

export type BaseState<T = null> = {
  data?: T;
  error: boolean;
  loading: boolean;
}
