import React from 'react';
import { useImageLoader } from 'hooks';
import { AvatarContainer } from './styled';

export const Avatar: React.FC<AvatarProps> = (props) => {
  const [image] = useImageLoader(props.src);

  return (
    <AvatarContainer {...props} src={image} />
  );
};

export type AvatarProps = React.ImgHTMLAttributes<{}> & {
  src: string;
};

export default Avatar;
