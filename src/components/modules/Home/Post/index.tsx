import * as i from 'types';
import React from 'react';
import { getDate } from 'services';
import { __OLD__Header, Paragraph, TransitionPost } from 'common';
import { PostBlock, DateText, PostContent } from './styled';

const Post: React.FC<Props> = ({ data }) => (
  <TransitionPost>
    {(visible) => (
      <PostBlock>
        <PostContent isVisible={visible}>
          <__OLD__Header>{data.title}</__OLD__Header>
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
  data: i.BasePost;
}

export default Post;
