import * as i from 'types';
import React from 'react';
import { getSourceUrl, getDate } from 'services';
import { Tag, Heading, Link } from 'common';
import {
  NewsItemContainer, PostImage, Tags, PostContent, PostText, PostDate, PostHeading, ReadMore,
} from './styled';

const NewsItem: React.FC<Props> = ({ post }) => {
  const title = post.title && post.title.length > 40
    ? post.title.substring(0, 40) + '...'
    : post.title;

  return (
    <NewsItemContainer>
      {/** @todo link to news detail page */}
      <Link to="home">
        <PostImage>
          {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
        </PostImage>
        <PostContent>
          <PostHeading>
            {title && <Heading>{title}</Heading>}
            <Tags>
              {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
                <Tag key={tag.id} as="li" color={tag.color}>{tag.name}</Tag>
              ))}
            </Tags>

            <ReadMore>Read More</ReadMore>
          </PostHeading>
          {post.abstract && <PostText>{post.abstract}</PostText>}
          <PostDate>{getDate(post.created_at)}</PostDate>
        </PostContent>
      </Link>
    </NewsItemContainer>
  );
};

export type Props = {
  post: i.Post;
};

export default NewsItem;
