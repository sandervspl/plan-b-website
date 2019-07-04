import * as i from 'types';
import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { API_ENDPOINT, getCmsUrl, getUrl } from 'services';
import { fetchPage } from 'ducks/page';
import { useSelector } from 'hooks';
import { Heading } from 'common';
import Page from 'modules/Page';
import { AboutContainer } from 'modules/About/styled';

const About: i.NextPageComponent<Props> = ({ url }) => {
  const about = useSelector((state) => state.page.about);

  const transformImageUri: TransformImageUri = (uri) => {
    return getCmsUrl(uri);
  };

  return (
    <Page meta={about && about.meta} url={url}>
      <AboutContainer>
        {about && (
          <>
            <Heading as="h1">{about.title}</Heading>
            <ReactMarkdown
              source={about.content}
              transformImageUri={transformImageUri}
            />
          </>
        )}
      </AboutContainer>
    </Page>
  );
};

About.getInitialProps = async ({ req, store }) => {
  await store.dispatch(fetchPage(API_ENDPOINT.ABOUT));

  return {
    url: getUrl(req),
  };
};

type Props = {
  url: string;
}

type TransformImageUri = ReactMarkdownProps['transformImageUri'];

export default About;
