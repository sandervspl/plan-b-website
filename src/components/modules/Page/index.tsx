import React from 'react';
import MobileNav from './MobileNav';
import Content from './Content';
import { HeroContainer } from './HeroContainer';

const Page: React.FC<Props> = ({ children, hero }) => (
  <main>
    <MobileNav />
    <HeroContainer>
      {hero && hero.content}
    </HeroContainer>
    <Content>
      {children}
    </Content>
  </main>
);

type Props = {
  hero?: {
    big?: boolean;
    content: React.ReactNode;
  };
}

export default Page;
