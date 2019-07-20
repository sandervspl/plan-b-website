import React from 'react';
import { useImageLoader } from 'hooks';
import { CircleImgContainer, CircleImgInner } from './styled';

export const CircleImg: React.FC<Props> = ({ src, className, ...props }) => {
  const [image] = useImageLoader(src);

  return (
    <CircleImgContainer className={className} {...props}>
      <CircleImgInner src={image} alt={props.alt} />
    </CircleImgContainer>
  );
};

CircleImg.defaultProps = {
  alt: '',
};

type Props = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
  className?: string;
  alt?: string;
};
