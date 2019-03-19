import * as i from 'types';
import * as React from 'react';
import { API_ENDPOINT } from 'services/api/endpoints';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import Page from 'modules/Page';
import { Posts, Hero, RecruitmentWidget } from 'modules/Home';
import { MiscPostsContainer } from 'modules/Home/styled';

class Home extends React.Component {
  static async getInitialProps({ store }: { store: i.Store }) {
    await Promise.all([
      // @ts-ignore I don't understand the error
      store.dispatch(fetchPage(API_ENDPOINT.HOME)),
      // @ts-ignore I don't understand the error
      store.dispatch(fetchRecruitment()),
    ]);

    return {};
  }

  render() {
    return (
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
  }
}

export default Home;
