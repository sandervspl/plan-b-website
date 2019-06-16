import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'hooks';
import { getLatestTwoNews } from 'ducks/posts/reselect';
import { GlitchLogo } from 'common';
import NewsItem from './components/NewsItem';
import { LatestNewsContainer } from './styled';

const MobileNewsSlider = dynamic(import('./components/MobileNewsSlider'));

const LatestNews: React.FC = () => {
  const posts = useSelector((state) => getLatestTwoNews(state));
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (!posts) return null;

  return (
    <LatestNewsContainer>
      {isMobile ? (
        <MobileNewsSlider />
      ) : (
        posts.map((post) => (
          <NewsItem key={post.id} post={post} />
        ))
      )}

      <GlitchLogo />
    </LatestNewsContainer>
  );
};

export default LatestNews;
