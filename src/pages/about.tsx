import * as i from 'types';
import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { API_ENDPOINT, getCmsUrl } from 'services';
import { fetchPage } from 'ducks/page';
import Page from 'modules/Page';
import { AboutContainer } from 'modules/About/styled';
import { useSelector } from 'hooks';
import { Heading } from 'common';

type TransformImageUri = ReactMarkdownProps['transformImageUri'];

const About: i.NextPageComponent = () => {
  const content = useSelector((state) => state.page.about && state.page.about.content);
  const title = useSelector((state) => state.page.about && state.page.about.title);

  const transformImageUri: TransformImageUri = (uri) => {
    return getCmsUrl(uri);
  };

  return (
    <Page>
      <AboutContainer>
        {title && <Heading as="h1">{title}</Heading>}
        {content && (
          <ReactMarkdown
            source={content}
            transformImageUri={transformImageUri}
          />
        )}
      </AboutContainer>
    </Page>
  );
};

About.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPage(API_ENDPOINT.ABOUT));

  return {};
};

export default About;
