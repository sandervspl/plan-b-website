import * as i from 'types';
import React from 'react';
import { getSourceUrl } from 'services';
import { FadedBackgroundImageContainer, BackgroundImage, Fade } from './styled';

const FadedBackgroundImage: React.FC<Props> = ({ image, imgRef, next }) => (
  <FadedBackgroundImageContainer ref={imgRef} next={next}>
    {image && (
      <BackgroundImage src={getSourceUrl(image.url)} />
    )}
    <Fade />
  </FadedBackgroundImageContainer>
);

export type Props = {
  image?: i.Image;
  imgRef: React.MutableRefObject<null>;
  next?: boolean;
};

export default FadedBackgroundImage;
