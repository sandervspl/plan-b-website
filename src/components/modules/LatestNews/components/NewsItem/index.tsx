import * as i from 'types';
import React from 'react';
import { getSourceUrl, getDate } from 'services';
import { Tag } from 'common';
import {
  NewsItemContainer, PostImage, PostTitle, Tags, PostContent, PostText, PostDate,
} from './styled';

const NewsItem: React.FC<Props> = ({ post }) => {
  const title = post.title && post.title.length > 40
    ? post.title.substring(0, 40) + '...'
    : post.title;

  return (
    <NewsItemContainer>
      <PostImage>
        {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
      </PostImage>
      <PostContent>
        {title && <PostTitle>{title}</PostTitle>}
        <Tags>
          {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
            <Tag key={tag.id} as="li" color={tag.color}>{tag.name}</Tag>
          ))}
        </Tags>
        {post.abstract && <PostText>{post.abstract}</PostText>}
        <PostDate>{getDate(post.created_at)}</PostDate>
      </PostContent>
    </NewsItemContainer>
  );
};

export type Props = {
  post: i.Post;
};

export default NewsItem;
