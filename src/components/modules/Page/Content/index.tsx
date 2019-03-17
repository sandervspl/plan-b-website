import React from 'react';
import { Navigation } from 'modules/Home';
import { ContentContainer, PageContentContainer } from './styled';

const PageContent: React.FC<Props> = ({ children, positionLower }) => (
  <PageContentContainer positionLower={positionLower}>
    <Navigation />
    <ContentContainer>
      {children}
    </ContentContainer>
  </PageContentContainer>
);

type Props = {
  positionLower: boolean;
}

export default PageContent;
