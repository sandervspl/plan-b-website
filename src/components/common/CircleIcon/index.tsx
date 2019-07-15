import React from 'react';
import { getCmsUrl } from 'services';
import { useImageLoader } from 'hooks';
import { CircleIconContainer, CircleIconImg } from './styled';

export const CircleIcon: React.FC<Props> = ({ src }) => {
  const [image] = useImageLoader(getCmsUrl(src));

  return (
    <CircleIconContainer>
      <CircleIconImg src={image} alt="" />
    </CircleIconContainer>
  );
};

type Props = {
  src: string;
};
