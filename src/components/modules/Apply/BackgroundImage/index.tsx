import React from 'react';
import { FadedBackgroundImageContainer, BackgroundImage, Fade } from './styled';

const FadedBackgroundImage: React.FC<Props> = ({ image, active, next }) => (
  <FadedBackgroundImageContainer active={active} next={next}>
    {image && active && (
      <BackgroundImage src={image} />
    )}
    <Fade />
  </FadedBackgroundImageContainer>
);

export type Props = {
  image?: string;
  next?: boolean;
  active?: boolean;
};

export default FadedBackgroundImage;
