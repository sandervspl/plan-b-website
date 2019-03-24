import * as i from 'types';
import { FormState } from 'final-form';

export type ReduxFormState = {
  [key in i.Forms]: FormState;
}

export type Forms = 'application';

export type GetFormState = (state: i.ReduxState, form: i.Forms) => {};
