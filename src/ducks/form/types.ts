import * as i from 'types';
import { FormState } from 'final-form';

export type ReduxFormState = {
  activeField: string;
} & {
  [key in i.Forms]?: FormState;
}

export type Forms = 'application';

export type FieldNames = 'armory_link';

export type GetFormState = (state: i.ReduxState, form: i.Forms) => void;
export type SetActiveField = (name: i.FieldNames) => void;
