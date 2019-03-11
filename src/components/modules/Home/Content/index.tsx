import React from 'react';
import { ContentContainer } from './styled';
import Posts from '../Posts';
import RecruitmentWidget from '../RecruitmentWidget';

const HomeContent: React.FC = () => (
  <ContentContainer>
    <Posts />
    <RecruitmentWidget />
  </ContentContainer>
);

export default HomeContent;
