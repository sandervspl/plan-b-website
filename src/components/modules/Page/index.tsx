import React from 'react';
import { withRouter, SingletonRouter } from 'next/router';
import MobileNav from './MobileNav';
import Content from './Content';
import { HeroContainer } from './HeroContainer';
import LogoLink from './LogoLink';
import BaseHero from './BaseHero';
import { AwayFromHomeTransitionStyle, ToHomeTransitionStyle } from './styled';

const Page: React.FC<Props> = ({ children, hero, className, router }) => {
  const heroContent = hero && typeof hero.content === 'string'
    ? <BaseHero src={hero.content} />
    : hero!.content;

  return (
    <main className={className}>
      {router.route !== '/home' && <AwayFromHomeTransitionStyle />}
      {router.route === '/home' && <ToHomeTransitionStyle />}
      <MobileNav />
      <LogoLink />
      <HeroContainer big={hero!.big}>
        {heroContent}
      </HeroContainer>
      <Content positionLower={hero!.big!}>
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
