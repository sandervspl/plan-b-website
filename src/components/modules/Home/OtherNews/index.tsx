import React from 'react';
import { useSelector } from 'hooks';
import { getOtherNews } from 'ducks/posts/selectors';
import { Heading, NewsItem } from 'common';
import { OtherNewsContainer } from './styled';

const OtherNews: React.FC = () => {
  const posts = useSelector(getOtherNews);

  return (
    <OtherNewsContainer>
      <Heading as="h2">
        In Other News
      </Heading>
      {posts.map((post) => (
        <NewsItem key={post.id} post={post} />
      ))}
    </OtherNewsContainer>
  );
};

export default OtherNews;
