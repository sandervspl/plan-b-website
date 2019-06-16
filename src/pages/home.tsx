import * as i from 'types';
import React from 'react';
import { API_ENDPOINT } from 'services';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment, fetchRecruitmentClass } from 'ducks/recruitment';
import Page from 'modules/Page';
import LatestNews from 'modules/LatestNews';
import { fetchPosts } from 'ducks/posts';
import RecruitmentBlock from 'modules/RecruitmentBlock';
import OtherNews from 'modules/OtherNews';

const Home: i.NextPageComponent = () => (
  <Page>
    <LatestNews />
    <RecruitmentBlock />
    <OtherNews />
  </Page>
);

Home.getInitialProps = async ({ store }) => {
  await Promise.all([
    store.dispatch(fetchPage(API_ENDPOINT.HOME)),
    store.dispatch(fetchRecruitment()),
  ]);

  // Get detailed post data
  const { home } = store.getState().page;

  if (home && home!.posts) {
    const postIds = home.posts.map((post) => post.id);
    await store.dispatch(fetchPosts(postIds));
  }

  // Get detailed class data
  const recruitment = store.getState().recruitment.data;

  if (recruitment && recruitment.classes) {
    const classFetches = recruitment.classes.map((cls) => (
      store.dispatch(fetchRecruitmentClass(cls.id))
    ));

    await Promise.all(classFetches);
  }

  return {};
};

export default Home;
