import * as i from 'types';
import React from 'react';
import { QuestionContainer } from './styled';

const Question: React.FC<Props> = ({ Component, ...props }) => {
  return (
    <QuestionContainer>
      {<Component {...props} />}
    </QuestionContainer>
  );
};

export type Props = i.QuestionComponentProps & {
  answered?: boolean;
  Component: React.ComponentType<i.QuestionComponentProps>;
};

export default Question;
