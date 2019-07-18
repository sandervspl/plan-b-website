import React from 'react';
import { useImageLoader } from 'hooks';
import { CircleIconContainer, CircleIconImg } from './styled';

export const CircleIcon: React.FC<Props> = ({ src }) => {
  const [image] = useImageLoader(src);

  return (
    <CircleIconContainer>
      <CircleIconImg src={image} alt="" />
    </CircleIconContainer>
  );
};

type Props = {
  src: string;
};
