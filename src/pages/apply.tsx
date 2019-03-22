import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';
import { API_ENDPOINT } from 'services';
import { fetchPage } from 'ducks/page';
import { Header, SingleContentContainer, TransitionPost, Fullscreenpage } from 'common';

class ApplicationPage extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await store.dispatch(fetchPage(API_ENDPOINT.APPLICATION));

    return {};
  }

  render() {
    const { application } = this.props.page;

    return (
      <Fullscreenpage>
        <TransitionPost>
          {(visible) => (
            <SingleContentContainer visible={visible}>
              <Header>Application Form</Header>
              SOON
            </SingleContentContainer>
          )}
        </TransitionPost>
      </Fullscreenpage>
    );
  }
}

type Props = {
  page: i.PageState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(ApplicationPage);
