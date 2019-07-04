import React from 'react';
import { __OLD__Header } from 'common';
import { QuestionHeaderContainer } from './styled';

const QuestionHeader: React.FC = ({ children }) => (
  <QuestionHeaderContainer>
    <__OLD__Header as="h1">{children}</__OLD__Header>
  </QuestionHeaderContainer>
);

export default QuestionHeader;
