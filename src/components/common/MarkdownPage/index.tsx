import * as i from 'types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getCmsUrl } from 'services';
import { Heading, DateText } from 'common';
import Page from 'modules/Page';
import { MarkdownPageContainer, HeadImage } from './styled';

const MarkdownPage: i.NextPageComponent<Props> = ({ url, data }) => {
  return (
    <Page meta={data.meta} url={url}>
      <MarkdownPageContainer>
        {'image' in data && (
          <>
            <HeadImage>
              <img src={getCmsUrl(data.image.url)} alt={data.image.name} />
            </HeadImage>
            <DateText date={data.created_at} />
          </>
        )}
        {'title' in data && <Heading as="h1">{data.title}</Heading>}
        {'content' in data && (
          <ReactMarkdown
            source={data.content}
            transformImageUri={getCmsUrl}
          />
        )}
      </MarkdownPageContainer>
    </Page>
  );
};

type Props = {
  url: string;
  data: i.PagesBody;
}

export default MarkdownPage;
