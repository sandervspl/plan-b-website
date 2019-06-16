import * as i from 'types';
import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'hooks';
import { GlitchLogo } from 'common';
import NewsItem from './components/NewsItem';
import { LatestNewsContainer } from './styled';

const MobileNewsSlider = dynamic(import('./components/MobileNewsSlider'));

const LatestNews: React.FC = () => {
  const posts = useSelector((state) => state.posts);
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (!posts.list) return null;

  return (
    <LatestNewsContainer>
      {isMobile ? (
        <MobileNewsSlider />
      ) : (
        posts.list!.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))
      )}

      <GlitchLogo />
    </LatestNewsContainer>
  );
};

export default LatestNews;
