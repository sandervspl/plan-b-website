import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post';
import { PostsContainer } from './styled';

const Posts: React.FC<Props> = ({ page }) => (
  <PostsContainer>
    {page.posts.map((post) => (
      <Post key={post.id} data={post} />
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
