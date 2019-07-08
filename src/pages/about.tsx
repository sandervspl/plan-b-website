import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { fetchPage } from 'ducks/page';
import MarkdownPage from 'common/MarkdownPage';
import { useSelector } from 'hooks';

const About: i.NextPageComponent<Props> = ({ url }) => {
  const about = useSelector((state) => state.page.about);

  if (!about) return null;

  return <MarkdownPage url={url} data={about} />;
};

About.getInitialProps = async ({ req, store }) => {
  await store.dispatch(fetchPage<i.AboutPageData>(API_ENDPOINT.ABOUT));

  return {
    url: getUrl(req),
  };
};

type Props = {
  url: string;
}

export default About;
