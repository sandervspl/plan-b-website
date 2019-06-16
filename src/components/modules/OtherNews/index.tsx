import React from 'react';
import { useSelector } from 'hooks';
import { getOtherNews } from 'ducks/posts/reselect';
import { theme } from 'styles';
import { Heading, NewsCard } from 'common';
import { OtherNewsContainer, OlderNewsLink } from './styled';

const OtherNews: React.FC = () => {
  const posts = useSelector((state) => getOtherNews(state));

  return (
    <OtherNewsContainer>
      <Heading capeColor={theme.color.primary.dark}>
        In Other News
      </Heading>
      {posts.map((post) => (
        <NewsCard key={post.id} post={post} />
      ))}
      <OlderNewsLink to="news">All news</OlderNewsLink>
    </OtherNewsContainer>
  );
};

export default OtherNews;
