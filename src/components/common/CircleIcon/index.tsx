import React from 'react';
import { useImageLoader } from 'hooks';
import { CircleIconContainer, CircleIconImg } from './styled';

export const CircleIcon: React.FC<Props> = ({ src, className }) => {
  const [image] = useImageLoader(src);

  return (
    <CircleIconContainer className={className}>
      <CircleIconImg src={image} alt="" />
    </CircleIconContainer>
  );
};

type Props = {
  src: string;
  className?: string;
};
