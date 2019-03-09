
import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';
import { fetchPage } from 'ducks/page';
import { PAGE_ID } from 'ducks/page/pages';

class Home extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await store.dispatch(fetchPage(PAGE_ID.HOME));

    return {};
  }

  render() {
    const { page } = this.props;

    return (
      <>
        <h1>{page.data.header_title}</h1>
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
