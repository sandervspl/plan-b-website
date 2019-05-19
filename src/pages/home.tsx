import * as i from 'types';
import React from 'react';
import { API_ENDPOINT } from 'services';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import Page from 'modules/Page';
import LatestNews from 'modules/LatestNews';
import { fetchPosts } from 'ducks/posts';

const Home: i.NextPageComponent = () => (
  <Page>
    <LatestNews />
  </Page>
);

Home.getInitialProps = async ({ store }) => {
  await Promise.all([
    store.dispatch(fetchPage(API_ENDPOINT.HOME)),
    store.dispatch(fetchRecruitment()),
  ]);

  const { home } = store.getState().page;

  if (home && home!.posts) {
    const postIds = home.posts.map((post) => post.id);
    await store.dispatch(fetchPosts(postIds));
  }

  return {};
};

export default Home;
