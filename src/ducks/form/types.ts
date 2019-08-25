import * as i from 'types';

export type ReduxFormState = {
  sending: {
    loading: boolean;
    success: boolean;
    failed: boolean;
  };
}

export type Forms = '';

export type FieldNames = 'armory_link';

export type GetFormState = (state: i.ReduxState, form: i.Forms) => void;

export type SendApplicationResponse = {
  applicationUuid: string;
}

export type SendApplication = i.BaseThunkAction<
  (values: object) => Promise<SendApplicationResponse | void>
>;
