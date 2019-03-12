import * as i from 'types';
import * as React from 'react';
import { API_ENDPOINT } from 'services/api/endpoints';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import { Hero, Content } from 'modules/Home';
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
      <Page>
        <Hero />
        <Content />
      </Page>
    );
  }
}

type Props = {
  page: i.PageState;
}

export default Home;
