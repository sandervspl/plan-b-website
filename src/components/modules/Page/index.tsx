import React from 'react';
import Navigation from './components/Navigation';
import { PageContainer, PageContent } from './styled';

const Page: React.FC<PageProps> = ({ children, withoutNav }) => {
  return (
    <PageContainer>
      <PageContent>
        {!withoutNav && <Navigation />}
        {children}
      </PageContent>
    </PageContainer>
  );
};

export type PageProps = {
  withoutNav?: boolean;
};

Page.defaultProps = {
  withoutNav: false,
};

export default Page;
