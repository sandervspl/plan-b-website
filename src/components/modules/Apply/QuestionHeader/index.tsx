import React from 'react';
import { Heading } from 'common';
import { QuestionHeaderContainer } from './styled';

const QuestionHeader: React.FC = ({ children }) => (
  <QuestionHeaderContainer>
    <Heading as="h1">{children}</Heading>
  </QuestionHeaderContainer>
);

export default QuestionHeader;
