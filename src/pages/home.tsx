import * as i from 'types';
import * as React from 'react';
import { API_ENDPOINT } from 'services/api/endpoints';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import { Posts, MiscPosts, Hero } from 'modules/Home';
import Page from 'modules/Page';

class Home extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await Promise.all([
      store.dispatch(fetchPage(API_ENDPOINT.HOME)),
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
        }}>
        <Posts />
        <MiscPosts />
      </Page>
    );
  }
}

type Props = {
  page: i.PageState;
}

export default Home;
