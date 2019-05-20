import * as i from 'types';
import React from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import __OLD__Page from 'modules/__OLD__Page';
import { API_ENDPOINT, getSourceUrl } from 'services';
import { fetchPage } from 'ducks/page';
import { __OLD__Header, SingleContentContainer, TransitionPost } from 'common';
import { AboutContent } from 'modules/About/styled';

const About: i.NextPageComponent<Props> = ({ page }) => (
  <__OLD__Page
    hero={{
      content: page.about!.hero_image ? getSourceUrl(page.about!.hero_image!.url) : null,
    }}
  >
    <TransitionPost>
      {(visible) => (
        <SingleContentContainer isVisible={visible}>
          <__OLD__Header>{page.about && page.about.title}</__OLD__Header>
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
  </__OLD__Page>
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
