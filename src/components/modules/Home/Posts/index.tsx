import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import { getDate } from 'services';
import { Header, Paragraph } from 'common';
import { DateText, PostBlock, PostsContainer } from './styled';

const Posts: React.FC<Props> = ({ page }) => (
  <PostsContainer>
    {page.posts.map((post) => (
      <PostBlock key={post.id}>
        <Header>{post.title}</Header>
        <DateText>
          {getDate(post.created_at, {}).replace(/\//g, '.')}
        </DateText>
        <Paragraph>{post.content}</Paragraph>
      </PostBlock>
    ))}
  </PostsContainer>
);

export type Props = {
  page: i.PageData;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page.data,
});

export default connect(mapStateToProps)(Posts);
