import * as i from 'types';

export type AnswerComponents = {
  [key in i.AnswerType]: React.ComponentType<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
