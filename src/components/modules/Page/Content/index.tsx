import React from 'react';
import { Navigation } from 'modules/Home';
import { ContentContainer, HomeContentContainer } from './styled';

const HomeContent: React.FC = ({ children }) => (
  <HomeContentContainer>
    <Navigation />
    <ContentContainer>
      {children}
    </ContentContainer>
  </HomeContentContainer>
);

export default HomeContent;
