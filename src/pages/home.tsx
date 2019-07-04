import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { fetchPage } from 'ducks/page';
import { fetchPosts } from 'ducks/posts';
import { fetchRecruitment, fetchRecruitmentClass } from 'ducks/recruitment';
import Page from 'modules/Page';
import { LatestNews, RecruitmentBlock, OtherNews, Twitch } from 'modules/Home';
import { HomeContainer } from 'modules/Home/styled';
import { useSelector } from 'hooks';

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

  // Get detailed class data
  // @TODO can be removed -- latest Strapi version gives detailed data in homepages fetch
  const recruitment = store.getState().recruitment.data;

  if (recruitment && recruitment.classes) {
    const classFetches = recruitment.classes.map((cls) => (
      store.dispatch(fetchRecruitmentClass(cls.id))
    ));

    await Promise.all(classFetches);
  }

  return {
    url: getUrl(req),
  };
};

type Props = {
  url: string;
}

export default Home;
