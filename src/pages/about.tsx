import * as i from 'types';
import * as React from 'react';
import Page from 'modules/Page';
import { API_ENDPOINT } from 'services/api/endpoints';
import { fetchPage } from 'ducks/page';
import { Header, Paragraph, SingleContentContainer, TransitionPost } from 'common';
import { connect } from 'react-redux';

class About extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    // @ts-ignore I don't understand the error
    await store.dispatch(fetchPage(API_ENDPOINT.ABOUT));

    return {};
  }

  render() {
    const { data } = this.props.page;

    return (
      <Page>
        <TransitionPost>
          {(visible) => (
            <SingleContentContainer visible={visible}>
              <Header>{data && data.title}</Header>
              <Paragraph>{data && data.content}</Paragraph>
            </SingleContentContainer>
          )}
        </TransitionPost>
      </Page>
    );
  }
}

type Props = {
  page: i.PageState<i.AboutPageData>;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(About);
