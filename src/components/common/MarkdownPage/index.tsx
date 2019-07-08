import * as i from 'types';
import React from 'react';
import ReactMarkdown, { ReactMarkdownProps } from 'react-markdown';
import { getCmsUrl } from 'services';
import { Heading } from 'common';
import Page from 'modules/Page';
import { MarkdownPageContainer } from './styled';

const MarkdownPage: i.NextPageComponent<Props> = ({ url, data }) => {
  const transformImageUri: TransformImageUri = (uri) => {
    return getCmsUrl(uri);
  };

  return (
    <Page meta={data.meta} url={url}>
      <MarkdownPageContainer>
        {'title' in data && <Heading as="h1">{data.title}</Heading>}
        {'content' in data && (
          <ReactMarkdown
            source={data.content}
            transformImageUri={transformImageUri}
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

type TransformImageUri = ReactMarkdownProps['transformImageUri'];

export default MarkdownPage;
