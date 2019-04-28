import React from 'react';
import { Header } from 'common';
import { QuestionHeaderContainer } from './styled';

const QuestionHeader: React.FC = ({ children }) => (
  <QuestionHeaderContainer>
    <Header as="h1">{children}</Header>
  </QuestionHeaderContainer>
);

export default QuestionHeader;
