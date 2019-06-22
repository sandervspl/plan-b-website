import * as i from 'types';
import React from 'react';
import TimeIcon from 'vectors/time.svg';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { getSourceUrl, getDate } from 'services';
import { Heading, Link } from 'common';
import {
  NewsItemContainer, PostImage, PostContent, PostDate, PostHeading, ReadMore,
} from './styled';

const NewsItem: React.FC<Props> = ({ post }) => {
  return (
    <NewsItemContainer>
      <Link to="news-detail" params={{ id: post.id }}>
        <PostDate>
          <TimeIcon />
          {getDate(post.created_at)}
        </PostDate>

        <PostImage>
          {post.image && <img src={getSourceUrl(post.image.url)} alt="" />}
        </PostImage>

        <PostContent>
          <PostHeading>
            {post.title && <Heading as="h3">{post.title}</Heading>}
            {/* <Tags>
              {post.tags && post.tags.length > 0 && post.tags.map((tag) => (
                <Tag key={tag.id} as="li" color={tag.color}>{tag.name}</Tag>
              ))}
            </Tags> */}

            <ReadMore>
              Read More
              <ArrowRightIcon />
            </ReadMore>
          </PostHeading>
        </PostContent>
      </Link>
    </NewsItemContainer>
  );
};

export type Props = {
  post: i.Post;
};

export default NewsItem;
