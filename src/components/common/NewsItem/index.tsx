import * as i from 'types';
import React from 'react';
import ArrowRightIcon from 'vectors/arrow-right.svg';
import { getCmsUrl } from 'services';
import { Heading, Link, DateText } from 'common';
import { Paragraph } from 'common/typography';
import { NewsItemContainer, PostImage, PostContent, PostHeading, ReadMore } from './styled';

export const NewsItem: React.FC<Props> = ({ post, columns }) => {
  return (
    <NewsItemContainer asColumns={columns}>
      <Link to="news-detail" params={{ id: post.id }}>
        <DateText date={post.created_at} />

        <PostImage>
          <img src={getCmsUrl(post.image.url)} alt="" loading="lazy" />
        </PostImage>

        <PostContent>
          <PostHeading>
            {post.title && <Heading as="h2">{post.title}</Heading>}

            {post.abstract && (
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
