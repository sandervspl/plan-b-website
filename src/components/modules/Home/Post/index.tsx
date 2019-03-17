import * as i from 'types';
import React from 'react';
import { getDate } from 'services';
import { Header, Paragraph, TransitionPost } from 'common';
import { PostBlock, DateText, PostContent } from './styled';

const Post: React.FC<Props> = ({ data }) => (
  <TransitionPost>
    {(visible) => (
      <PostBlock>
        <PostContent visible={visible}>
          <Header>{data.title}</Header>
          <DateText>
            {getDate(data.created_at, {}).replace(/\//g, '.')}
          </DateText>
          <Paragraph>{data.content}</Paragraph>
        </PostContent>
      </PostBlock>
    )}
  </TransitionPost>
);

type Props = {
  data: i.Post;
}

export default Post;
