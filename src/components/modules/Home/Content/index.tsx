import React from 'react';
import { ContentContainer } from './styled';
import Posts from '../Posts';

const HomeContent: React.FC = () => (
  <ContentContainer>
    {/* <Recruitment /> */}
    <Posts />
  </ContentContainer>
);

export default HomeContent;
