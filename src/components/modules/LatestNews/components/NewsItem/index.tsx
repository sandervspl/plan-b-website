import * as i from 'types';
import React from 'react';
import { useSelector } from 'react-redux';
import { getSourceUrl, getDate } from 'services';
import { Tag, Heading, Link } from 'common';
import {
  NewsItemContainer, PostImage, Tags, PostContent, PostText, PostDate, PostHeading, ReadMore,
} from './styled';

const NewsItem: React.FC<Props> = ({ post }) => {
  const isMobile = useSelector((state: i.ReduxState) => state.ui.isMobile);

  const title = post.title && post.title.length > 40
    ? post.title.substring(0, 40) + '...'
    : post.title;

  return (
    <NewsItemContainer>
      {/** @todo link to news detail page */}
      <Link to="home">
        {isMobile ? (
          <PostImage>
            {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
          </PostImage>
        ) : Array.from({ length: 5 }).map((_, i) => (
          <PostImage key={i}>
            {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
          </PostImage>
        ))}
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
