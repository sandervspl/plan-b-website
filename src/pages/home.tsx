import * as i from 'types';
import * as React from 'react';
import { API_ENDPOINT } from 'services';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import Page from 'modules/Page';
import { Posts, Hero, RecruitmentWidget } from 'modules/Home';
import { MiscPostsContainer } from 'modules/Home/styled';

const Home: i.NextPageComponent = () => (
  <Page
    hero={{
      big: true,
      content: <Hero />,
    }}
  >
    <Posts />
    <MiscPostsContainer>
      <RecruitmentWidget />
    </MiscPostsContainer >
  </Page>
);

Home.getInitialProps = async ({ store }) => {
  await Promise.all([
    store.dispatch(fetchPage(API_ENDPOINT.HOME)),
    store.dispatch(fetchRecruitment()),
  ]);

  return {};
};

export default Home;
