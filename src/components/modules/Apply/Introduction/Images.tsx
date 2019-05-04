import * as i from 'types';
import React from 'react';
import img1 from 'images/recruitment/WoWScrnShot_060409_194034.jpg';
import img3 from 'images/recruitment/WoWScrnShot_060709_214610.jpg';
import img4 from 'images/recruitment/WoWScrnShot_060709_221845.jpg';
import { getStaticUrl } from 'services';
import { ImagesContainer, ImageContainer } from '../styled';

const images = [img1, img3, img4];

const IntroductionImages: React.FC<IntroductionImagesProps> = (props) => (
  <ImagesContainer {...props}>
    {images.map((img) => (
      <ImageContainer>
        <img src={getStaticUrl(img)} alt="" />
      </ImageContainer>
    ))}
  </ImagesContainer>
);

type IntroductionImagesProps = {
  tiltStyle: i.TiltStyle;
}

export default IntroductionImages;
