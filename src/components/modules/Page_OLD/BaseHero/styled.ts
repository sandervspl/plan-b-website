import styled from 'styled-components';

export const BaseHeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 1;
  will-change: opacity;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.secondary};
  opacity: .8;
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
