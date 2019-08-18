import * as i from 'types';

export type DkpState = i.BaseState;

export type SendDkpXml = i.BaseThunkAction<(file: File) => Promise<void>>;
