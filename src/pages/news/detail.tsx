import * as i from 'types';
import React from 'react';
import { API_ENDPOINT, getUrl } from 'services';
import { fetchPage } from 'ducks/page';
import MarkdownPage from 'common/MarkdownPage';
import { useSelector } from 'hooks';

const NewsDetail: i.NextPageComponent<Props, Queries> = ({ url }) => {
  const post = useSelector((state) => state.page.post);

  if (!post) return null;

  return <MarkdownPage url={url} data={post} />;
};

NewsDetail.getInitialProps = async ({ req, query, store }) => {
  await store.dispatch(fetchPage<i.NewsDetailPageData>(API_ENDPOINT.POSTS, query.id));

  return {
    url: getUrl(req),
  };
};

type Props = {
  url: string;
}

type Queries = {
  id: number;
}

export default NewsDetail;
