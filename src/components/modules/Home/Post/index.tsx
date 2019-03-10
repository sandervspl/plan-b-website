import * as i from 'types';
import React from 'react';
import { Header, Paragraph } from 'common';
import { DateText, PostContainer } from './styled';
import { getDate } from 'services';

const Post: React.FC<Props> = ({ data }) => (
  <PostContainer>
    <Header>{data.title}</Header>
    <DateText>
      {getDate(data.created_at, {}).replace(/\//g, '.')}
    </DateText>
    <Paragraph>{data.content}</Paragraph>
  </PostContainer>
);

export type Props = {
  data: i.Post;
};

export default Post;
