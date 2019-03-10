import * as i from 'types';
import * as React from 'react';
import { fetchPage } from 'ducks/page';
import { PAGE_ENDPOINT } from 'ducks/page/pages';
import { Hero, Content } from 'modules/Home';

class Home extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await store.dispatch(fetchPage(PAGE_ENDPOINT.HOME));

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
