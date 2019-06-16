import * as i from 'types';
import React from 'react';
import { getSourceUrl, getDate } from 'services';
import { Tag, Heading, Link } from 'common';
import { useSelector } from 'hooks';
import {
  NewsItemContainer, PostImage, Tags, PostContent, PostText, PostDate, PostHeading, ReadMore,
} from './styled';

const NewsItem: React.FC<Props> = ({ post }) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  const capeColor = post.tags && post.tags.length > 0
    ? post.tags[0].color
    : undefined;

  return (
    <NewsItemContainer>
      <Link to="news-detail" params={{ id: post.id }}>
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
            {post.title && <Heading capeColor={capeColor}>{post.title}</Heading>}
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
