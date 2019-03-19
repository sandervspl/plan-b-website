import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import Post from '../Post';
import { PostsContainer } from './styled';

const Posts: React.FC<Props> = ({ page }) => (
  <PostsContainer>
    {page.home && page.home.posts && page.home.posts.map((post) => (
      <Post key={post.id} data={post} />
    ))}
  </PostsContainer>
);

export type Props = {
  page: i.PageState;
};

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Posts);
