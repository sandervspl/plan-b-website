import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Page from 'modules/Page';
import { API_ENDPOINT } from 'services/api/endpoints';
import { fetchPage } from 'ducks/page';
import { Header, Paragraph, SingleContentContainer, TransitionPost } from 'common';
import { AboutContent } from 'modules/About/styled';

class About extends React.Component<Props> {
  static async getInitialProps({ store }: { store: i.Store }) {
    await store.dispatch(fetchPage(API_ENDPOINT.ABOUT));

    return {};
  }

  render() {
    const { about } = this.props.page;

    return (
      <Page>
        <TransitionPost>
          {(visible) => (
            <SingleContentContainer visible={visible}>
              <Header>{about && about.title}</Header>
              {about && about.content && (
                <AboutContent>
                  <ReactMarkdown
                    className="result"
                    source={about.content}
                  />
                </AboutContent>
              )}
            </SingleContentContainer>
          )}
        </TransitionPost>
      </Page>
    );
  }
}

type Props = {
  page: i.PageState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(About);
