import React from 'react';
import { HeroImage, BaseHeroContainer, HeroOverlay } from './styled';

const BaseHero: React.FC<Props> = ({ src }) => (
  <BaseHeroContainer>
    <HeroOverlay />
    <HeroImage src={src} />
  </BaseHeroContainer>
);

export type Props = {
  src: string;
};

export default BaseHero;
