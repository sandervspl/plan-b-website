import * as i from 'types';
import React from 'react';
import TimeIcon from 'vectors/time.svg';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { getSourceUrl, getDate } from 'services';
import { Heading, Link } from 'common';
import { Paragraph } from 'common/typography';
import {
  NewsItemContainer, PostImage, PostContent, PostDate, PostHeading, ReadMore,
} from './styled';

export const NewsItem: React.FC<Props> = ({ post, columns }) => {
  return (
    <NewsItemContainer asColumns={columns}>
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

            {columns && post.abstract && (
              <Paragraph>{post.abstract}</Paragraph>
            )}

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
  columns?: boolean;
};
