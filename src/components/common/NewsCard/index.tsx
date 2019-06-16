import * as i from 'types';
import React from 'react';
import { getSourceUrl, getDate } from 'services';
import { Tag } from 'common';
import { Heading } from 'common/typography';
import {
  NewsCardContainer, NewsImage, NewsContent, NewsHeading, Tags, NewsText, NewsDate,
} from './styled';

export const NewsCard: React.FC<NewsCardProps> = ({ post }) => {
  return (
    <NewsCardContainer>
      <NewsImage>
        {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
      </NewsImage>
      <NewsContent>
        <NewsHeading>
          {post.title && <Heading>{post.title}</Heading>}
          <Tags>
            {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
              <Tag key={tag.id} as="li" color={tag.color}>{tag.name}</Tag>
            ))}
          </Tags>
        </NewsHeading>

        {post.abstract && <NewsText>{post.abstract}</NewsText>}

        <NewsDate>{getDate(post.created_at)}</NewsDate>
      </NewsContent>
    </NewsCardContainer>
  );
};

export type NewsCardProps = {
  post: i.Post;
};
