import React from 'react';
import { Navigation, MiscPosts } from 'modules/Home';
import Posts from '../Posts';
import { ContentContainer, HomeContentContainer } from './styled';

const HomeContent: React.FC = () => (
  <HomeContentContainer>
    <Navigation />
    <ContentContainer>
      <Posts />
      <MiscPosts />
    </ContentContainer>
  </HomeContentContainer>
);

export default HomeContent;
