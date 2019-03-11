import React from 'react';
import { ContentBlockContainer } from './styled';

const ContentBlock: React.FC = ({ children }) => (
  <ContentBlockContainer>
    {children}
  </ContentBlockContainer>
);

export default ContentBlock;
