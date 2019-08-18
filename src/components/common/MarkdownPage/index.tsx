import * as i from 'types';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getCmsUrl } from 'services';
import { Heading } from 'common';
import Page from 'modules/Page';
import { MarkdownPageContainer, MarkdownContent } from './styled';

const MarkdownPage: i.NextPageComponent<Props> = ({ url, data }) => {
  return (
    <Page meta={data.meta} url={url}>
      <MarkdownPageContainer>
        {'content' in data && (
          <MarkdownContent>
            {'title' in data && <Heading as="h1">{data.title}</Heading>}

            <ReactMarkdown
              source={data.content}
              transformImageUri={getCmsUrl}
            />
          </MarkdownContent>
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
