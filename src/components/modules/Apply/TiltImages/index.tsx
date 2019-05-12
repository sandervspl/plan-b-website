import * as i from 'types';
import React from 'react';
import { ImagesContainer, ImageContainer } from '../styled';

const TiltImages: React.FC<TiltImagesProps> = ({ images, ...props }) => (
  <ImagesContainer {...props}>
    {images.map((img) => (
      <ImageContainer key={img}>
        <img src={img} alt="" />
      </ImageContainer>
    ))}
  </ImagesContainer>
);

type TiltImagesProps = {
  tiltStyle: i.TiltStyle;
  images: string[];
}

export default TiltImages;
