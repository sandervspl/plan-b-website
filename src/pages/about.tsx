import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { fetchPage } from 'ducks/page';
import MarkdownPage from 'common/MarkdownPage';
import { useSelector } from 'hooks';

const AboutPage: i.NextPageComponent = ({ url }) => {
  const about = useSelector((state) => state.page.about);

  if (!about) return null;

  return <MarkdownPage url={url} data={about} />;
};

AboutPage.getInitialProps = async ({ req, store }) => {
  await store.dispatch(fetchPage<i.AboutPageData>(API_ENDPOINT.ABOUT));

  return {
    url: getUrl(req),
  };
};

export default AboutPage;
