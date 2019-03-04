
import * as i from 'types';
import * as React from 'react';
import { NextComponentClass } from 'next';
import { connect } from 'react-redux';
import { fetchPage } from 'ducks/page';
import { Test } from 'modules';
import { PAGE_ID } from 'ducks/page/pages';

class Home extends React.Component<NextComponentClass> {
  static async getInitialProps({ store }: { store: i.Store }) {
    store.dispatch(fetchPage(PAGE_ID.HOME));

    return {};
  }

  render() {
    return (
      <Test />
    );
  }
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(Home);
