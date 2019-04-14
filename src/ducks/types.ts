import * as i from 'types';

export * from 'ducks/page/types';
export * from 'ducks/recruitment/types';
export * from 'ducks/form/types';
export * from 'ducks/character/types';

export type ReduxState = {
  page: i.PageState;
  recruitment: i.RecruitmentState;
  form: i.ReduxFormState;
  character: i.CharacterState;
}

export type BaseState<T = null> = {
  data?: T;
  error: boolean;
  loading: boolean;
}

export type Image = {
  id: number;
  name: string;
  hash: string;
  sha256: string;
  ext: string;
  mime: string;
  size: string;
  url: string;
  provider: string;
  public_id?: string;
  created_at: Date;
  updated_at: Date;
}
