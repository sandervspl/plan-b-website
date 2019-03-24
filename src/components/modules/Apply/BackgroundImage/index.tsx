import * as i from 'types';
import React from 'react';
import { getSourceUrl } from 'services';
import { FadedBackgroundImageContainer, BackgroundImage, Fade } from './styled';

const FadedBackgroundImage: React.FC<Props> = ({ image, active, next }) => (
  <FadedBackgroundImageContainer active={active} next={next}>
    {image && active && (
      <BackgroundImage src={getSourceUrl(image.url)} />
    )}
    <Fade />
  </FadedBackgroundImageContainer>
);

export type Props = {
  image?: i.Image;
  next?: boolean;
  active?: boolean;
};

export default FadedBackgroundImage;
