import * as i from 'types';
import * as React from 'react';
import { fetchPage } from 'ducks/page';
import { API_ENDPOINT } from 'services/api/endpoints';
import { Hero, Content } from 'modules/Home';
import { fetchRecruitment } from 'ducks/recruitment';

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
      <main>
        <Hero />
        <Content />
      </main>
    );
  }
}

type Props = {
  page: i.PageState;
}

export default Home;
