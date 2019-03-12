import React from 'react';
import { Navigation } from 'modules/Home';
import Posts from '../Posts';
import MiscPosts from 'modules/Home/MiscPosts';
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
