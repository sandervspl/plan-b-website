import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'hooks';
import { getLatestTwoNews } from 'ducks/posts/reselect';
import { LatestNewsContainer } from './styled';

const LatestNewsSlider = dynamic(import('./components/LatestNewsSlider'));

const LatestNews: React.FC = () => {
  const posts = useSelector((state) => getLatestTwoNews(state));

  if (!posts) return null;

  return (
    <LatestNewsContainer>
      <LatestNewsSlider />
    </LatestNewsContainer>
  );
};

export default LatestNews;
