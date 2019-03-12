import React from 'react';
import RecruitmentWidget from '../RecruitmentWidget';
import { MiscPostsContainer } from './styled';

const MiscPosts: React.FC<Props> = () => (
  <MiscPostsContainer>
    <RecruitmentWidget />
  </MiscPostsContainer >
);

export type Props = {

};

export default MiscPosts;
