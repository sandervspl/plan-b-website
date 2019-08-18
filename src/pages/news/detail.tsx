import * as i from 'types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { API_ENDPOINT, getUrl, getCmsUrl } from 'services';
import { useSelector } from 'hooks';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import { fetchActiveStreams } from 'ducks/twitch';
import { DateText, Tag, Heading, NewsItem } from 'common';
import { MarkdownContent } from 'common/MarkdownPage/styled';
import Page from 'modules/Page';
import RecruitmentBlock from 'modules/RecruitmentBlock';
import Twitch from 'modules/Twitch';
import {
  NewsDetailContainer, SidebarContainer, NewsInfo, MoreNewsContainer,
} from 'modules/NewsDetail/styled';
import HeaderImage from 'modules/Page/components/HeaderImage';

const NewsDetailPage: i.NextPageComponent<{}, Queries> = ({ url }) => {
  const post = useSelector((state) => state.page.post);

  if (!post) return null;

  return (
    <Page
      meta={{
        ...post.meta,
        title: post.title,
        description: post.abstract,
        image: post.image,
      }}
      url={url}
    >
      <HeaderImage src={getCmsUrl(post.image.url)} alt={post.image.name} />

      <NewsInfo>
        <DateText date={post.created_at} />

        {post.tags && post.tags.map((tag) => (
          <Tag key={tag.id}>{tag.name}</Tag>
        ))}
      </NewsInfo>

      <NewsDetailContainer>
        <MarkdownContent>
          <Heading as="h1">{post.title}</Heading>

          <ReactMarkdown
            source={post.content}
            transformImageUri={getCmsUrl}
          />
        </MarkdownContent>

        <SidebarContainer>
          <RecruitmentBlock />

          <Twitch />

          {post.relatedNews.length > 0 && (
            <MoreNewsContainer>
              <Heading as="h2">Related news</Heading>
              {post.relatedNews.map((post) => (
                <NewsItem key={post.id} post={post} />
              ))}
            </MoreNewsContainer>
          )}
        </SidebarContainer>
      </NewsDetailContainer>
    </Page>
  );
};

NewsDetailPage.getInitialProps = async ({ req, query, store }) => {
  await Promise.all([
    store.dispatch(fetchPage<i.NewsDetailPageData>(API_ENDPOINT.POSTS, query.id)),
    store.dispatch(fetchRecruitment()),
    store.dispatch(fetchActiveStreams()),
  ]);

  return {
    url: getUrl(req),
  };
};

type Queries = {
  id: number;
}

export default NewsDetailPage;
