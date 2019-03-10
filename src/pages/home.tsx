import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPage } from 'ducks/page';
import { PAGE_ENDPOINT } from 'ducks/page/pages';
import { Hero } from 'modules/Home';

class Home extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await store.dispatch(fetchPage(PAGE_ENDPOINT.HOME));

    return {};
  }

  render() {
    const { page } = this.props;

    return (
      <>
        <Hero />
      </>
    );
  }
}

type Props = {
  page: i.PageState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Home);
