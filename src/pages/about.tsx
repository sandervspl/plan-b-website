import * as i from 'types';
import * as React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import Page from 'modules/Page_OLD';
import { API_ENDPOINT, getSourceUrl } from 'services';
import { fetchPage } from 'ducks/page';
import { Header, SingleContentContainer, TransitionPost } from 'common';
import { AboutContent } from 'modules/About/styled';

const About: i.NextPageComponent<Props> = ({ page }) => (
  <Page
    hero={{
      content: page.about!.hero_image ? getSourceUrl(page.about!.hero_image!.url) : null,
    }}
  >
    <TransitionPost>
      {(visible) => (
        <SingleContentContainer isVisible={visible}>
          <Header>{page.about && page.about.title}</Header>
          {page.about && page.about.content && (
            <AboutContent>
              <ReactMarkdown
                className="result"
                source={page.about.content}
              />
            </AboutContent>
          )}
        </SingleContentContainer>
      )}
    </TransitionPost>
  </Page>
);

About.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPage(API_ENDPOINT.ABOUT));

  return {};
};

type Props = {
  page: i.PageState;
}

const mapStateToProps: i.MapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps)(About);
