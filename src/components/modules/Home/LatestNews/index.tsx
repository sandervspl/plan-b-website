import React from 'react';
import dynamic from 'next/dynamic';
import { useSelector } from 'hooks';
import { getLatestNews } from 'ducks/posts/selectors';
import { LatestNewsContainer } from './styled';

const LatestNewsSlider = dynamic(import('./components/LatestNewsSlider'));

const LatestNews: React.FC = () => {
  const posts = useSelector(getLatestNews);

  if (!posts) return null;

  return (
    <LatestNewsContainer>
      <LatestNewsSlider />
    </LatestNewsContainer>
  );
};

export default LatestNews;
