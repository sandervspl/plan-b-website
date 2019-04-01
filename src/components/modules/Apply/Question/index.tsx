import * as i from 'types';
import React from 'react';
import FadedBackgroundImage from '../BackgroundImage';
import { QuestionContent } from './styled';

const Question: React.FC<Props> = ({ active, answered, image, Component, ...props }) => {
  return (
    <>
      <FadedBackgroundImage next image={image} active={active} />
      <QuestionContent active={active} answered={answered}>
        {<Component {...props} />}
      </QuestionContent>
    </>
  );
};

export type Props = i.QuestionComponentProps & {
  image?: string;
  answered?: boolean;
  Component: React.ComponentType<i.QuestionComponentProps>;
};

export default Question;
