import React from 'react';
import { useImageLoader } from 'hooks';
import { CircleImgContainer, CircleImgInner } from './styled';

export const CircleImg: React.FC<Props> = ({ src, className }) => {
  const [image] = useImageLoader(src);

  return (
    <CircleImgContainer className={className}>
      <CircleImgInner src={image} alt="" />
    </CircleImgContainer>
  );
};

type Props = {
  src: string;
  className?: string;
};
