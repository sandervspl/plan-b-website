import React from 'react';
import { useRouter } from 'services/hooks';
import MobileNav from './MobileNav';
import Content from './Content';
import { HeroContainer } from './HeroContainer';
import Topmenu from './TopMenu';
import BaseHero from './BaseHero';
import { Main, AwayFromHomeTransitionStyle, ToHomeTransitionStyle } from './styled';

const __OLD__Page: React.FC<Props> = ({ children, hero, className }) => {
  const router = useRouter();
  const heroContent = hero && typeof hero.content === 'string'
    ? <BaseHero src={hero.content} />
    : hero!.content;

  return (
    <Main className={className}>
      {router.route !== '/home' && <AwayFromHomeTransitionStyle />}
      {router.route === '/home' && <ToHomeTransitionStyle />}
      <MobileNav />
      <Topmenu />
      <HeroContainer big={hero!.big}>
        {heroContent}
      </HeroContainer>
      <Content positionLower={hero!.big!}>
        {children}
      </Content>
    </Main>
  );
};

type Props = {
  className?: string;
  hero?: {
    big?: boolean;
    content?: React.ReactNode;
  };
}

__OLD__Page.defaultProps = {
  hero: {
    big: false,
    content: null,
  },
};

export default __OLD__Page;
