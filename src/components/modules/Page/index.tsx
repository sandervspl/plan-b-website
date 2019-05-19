import React from 'react';
import Navigation from './components/Navigation';
import { PageContainer, PageContent } from './styled';

const Page: React.FC<Props> = ({ children }) => {
  return (
    <PageContainer>
      <PageContent>
        <Navigation />
        {children}
      </PageContent>
    </PageContainer>
  );
};

export type Props = {

};

export default Page;
