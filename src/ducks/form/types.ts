import * as i from 'types';
import { FormState } from 'final-form';

export type ReduxFormState = {
  [key in i.Forms]?: FormState;
} & {
  sending: {
    loading: boolean;
    success: boolean;
    failed: boolean;
  };
}

export type Forms = 'application';

export type FieldNames = 'armory_link';

export type GetFormState = (state: i.ReduxState, form: i.Forms) => void;

export type SendApplicationResponse = {
  applicationUuid: string;
}

export type SendApplication = i.BaseThunkAction<
  (values: object) => Promise<SendApplicationResponse | void>
>;
