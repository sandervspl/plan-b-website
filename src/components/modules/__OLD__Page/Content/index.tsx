import React from 'react';
import Navigation from 'modules/__OLD__Page/Navigation';
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
  positionLower?: boolean;
}

export default PageContent;
