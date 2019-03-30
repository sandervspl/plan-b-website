import * as i from 'types';

export type AnswerComponents = {
  [key in i.AnswerType]: React.ComponentType<any>;
}
