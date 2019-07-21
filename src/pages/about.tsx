import * as i from 'types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { API_ENDPOINT, getUrl, getCmsUrl } from 'services';
import { fetchPage } from 'ducks/page';
import Page from 'modules/Page';
import { useSelector } from 'hooks';
import { Heading } from 'common';
import { MarkdownContent } from 'common/MarkdownPage/styled';
import HeaderImage from 'modules/Page/components/HeaderImage';
import { AboutContainer } from 'modules/About/styled';

const AboutPage: i.NextPageComponent = ({ url }) => {
  const about = useSelector((state) => state.page.about);

  if (!about) return null;

  return (
    <Page meta={about.meta} url={url}>
      <HeaderImage src={getCmsUrl(about.header_image.url)} alt={about.header_image.name} />

      <AboutContainer>
        <MarkdownContent>
          <Heading as="h1">{about.title}</Heading>

          <ReactMarkdown
            source={about.content}
            transformImageUri={getCmsUrl}
          />
        </MarkdownContent>
      </AboutContainer>
    </Page>
  );
};

AboutPage.getInitialProps = async ({ req, store }) => {
  await store.dispatch(fetchPage<i.AboutPageData>(API_ENDPOINT.ABOUT));

  return {
    url: getUrl(req),
  };
};

export default AboutPage;
