import * as i from 'types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { API_ENDPOINT, getUrl, getCmsUrl } from 'services';
import { useSelector } from 'hooks';
import { fetchPage } from 'ducks/page';
import { fetchRecruitment } from 'ducks/recruitment';
import { fetchAllPosts } from 'ducks/posts';
import { DateText, Tag, Heading, NewsItem } from 'common';
import { MarkdownContent } from 'common/MarkdownPage/styled';
import Page from 'modules/Page';
import RecruitmentBlock from 'modules/RecruitmentBlock';
import Twitch from 'modules/Twitch';
import {
  HeadImage, NewsDetailContainer, SidebarContainer, NewsInfo, MoreNewsContainer,
} from 'modules/news-detail/styled';

const NewsDetail: i.NextPageComponent<Props, Queries> = ({ url }) => {
  const post = useSelector((state) => state.page.post);
  const posts = useSelector((state) => state.posts.data);

  if (!post) return null;

  return (
    <Page meta={post.meta} url={url}>
      <HeadImage>
        <img src={getCmsUrl(post.image.url)} alt={post.image.name} />
      </HeadImage>

      <NewsInfo>
        <DateText date={post.created_at} />

        <Tag>pve</Tag>
        <Tag>team</Tag>
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

          {posts && posts.length > 0 && (
            <MoreNewsContainer>
              <Heading as="h2">More news</Heading>
              {posts.filter((_, i) => i < 3).map((post) => (
                <NewsItem key={post.id} post={post} />
              ))}
            </MoreNewsContainer>
          )}
        </SidebarContainer>
      </NewsDetailContainer>
    </Page>
  );
};

NewsDetail.getInitialProps = async ({ req, query, store }) => {
  await Promise.all([
    store.dispatch(fetchPage<i.NewsDetailPageData>(API_ENDPOINT.POSTS, query.id)),
    store.dispatch(fetchRecruitment()),
    store.dispatch(fetchAllPosts()),
  ]);

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
