import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { useSelector } from 'hooks';
import { fetchPage } from 'ducks/page';
import { fetchPosts } from 'ducks/posts';
import { fetchRecruitment } from 'ducks/recruitment';
import { fetchActiveStreams } from 'ducks/twitch';
import Page from 'modules/Page';
import { LatestNews, OtherNews } from 'modules/Home';
import RecruitmentBlock from 'modules/RecruitmentBlock';
import Twitch from 'modules/Twitch';
import { HomeContainer } from 'modules/Home/styled';

const HomePage: i.NextPageComponent = ({ url }) => {
  const home = useSelector((state) => state.page.home);

  return (
    <Page meta={home && home.meta} url={url}>
      <HomeContainer>
        <LatestNews />
        <RecruitmentBlock />
        <Twitch />
        <OtherNews />
      </HomeContainer>
    </Page>
  );
};

HomePage.getInitialProps = async ({ req, store }) => {
  await Promise.all([
    store.dispatch(fetchPage(API_ENDPOINT.HOME)),
    store.dispatch(fetchRecruitment()),
    store.dispatch(fetchActiveStreams()),
  ]);

  // Get detailed post data
  const { home } = store.getState().page;

  if (home && home!.posts) {
    const postIds = home.posts.map((post) => post.id);
    await store.dispatch(fetchPosts(postIds));
  }

  return {
    url: getUrl(req),
  };
};

export default HomePage;
