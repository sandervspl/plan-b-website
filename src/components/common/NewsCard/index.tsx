import * as i from 'types';
import React from 'react';
import { getSourceUrl, getDate } from 'services';
import { useSelector } from 'hooks';
import { Tag } from 'common';
import { Heading } from 'common/typography';
import {
  NewsCardContainer, NewsImage, NewsContent, NewsHeading, Tags, NewsText, NewsDate, ReadMore,
} from './styled';

export const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  const capeColor = post.tags && post.tags.length > 0
    ? post.tags[0].color
    : undefined;

  return (
    <NewsCardContainer to="news-detail" params={{ id: post.id }}>
      {isMobile ? (
        <NewsImage>
          {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
        </NewsImage>
      ) : Array.from({ length: 5 }).map((_, i) => (
        <NewsImage key={i}>
          {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
        </NewsImage>
      ))}
      <NewsContent>
        <NewsHeading>
          {post.title && <Heading capeColor={capeColor}>{post.title}</Heading>}
          <Tags>
            {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
              <Tag key={tag.id} as="li" color={tag.color}>{tag.name}</Tag>
            ))}
          </Tags>
        </NewsHeading>

        {post.abstract && <NewsText>{post.abstract}</NewsText>}

        <NewsDate>{getDate(post.created_at)}</NewsDate>

        <ReadMore>Read More</ReadMore>
      </NewsContent>
    </NewsCardContainer>
  );
};

export type NewsCardProps = {
  post: i.Post;
};
