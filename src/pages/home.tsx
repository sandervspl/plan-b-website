import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { useSelector } from 'hooks';
import { fetchPage } from 'ducks/page';
import { fetchPosts } from 'ducks/posts';
import { fetchRecruitment } from 'ducks/recruitment';
import Page from 'modules/Page';
import { LatestNews, OtherNews } from 'modules/Home';
import RecruitmentBlock from 'modules/RecruitmentBlock';
import Twitch from 'modules/Twitch';
import { HomeContainer } from 'modules/Home/styled';

const Home: i.NextPageComponent<Props> = ({ url }) => {
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

Home.getInitialProps = async ({ req, store }) => {
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

  return {
    url: getUrl(req),
  };
};

type Props = {
  url: string;
}

export default Home;
