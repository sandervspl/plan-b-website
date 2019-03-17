import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import MobileNav from './MobileNav';
import Content from './Content';
import { HeroContainer } from './HeroContainer';
import { AwayFromHomeTransitionStyle, ToHomeTransitionStyle } from './styled';

const Page: React.FC<Props> = ({ children, hero, className, router }) => {
  return (
    <main className={className}>
      {router.route !== '/home' && <AwayFromHomeTransitionStyle />}
      {router.route === '/home' && <ToHomeTransitionStyle />}
      <MobileNav />
      <HeroContainer big={hero.big}>
        {hero.content}
      </HeroContainer>
      <Content positionLower={hero.big}>
        {children}
      </Content>
    </main>
  );
};

type Props = {
  className?: string;
  hero?: {
    big?: boolean;
    content?: React.ReactNode;
  };
  router: SingletonRouter;
}

Page.defaultProps = {
  hero: {
    big: false,
    content: null,
  },
};

export default withRouter(Page);
