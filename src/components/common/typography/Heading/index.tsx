import React from 'react';
import { HeadingContainer, Cape, Text } from './style';

export const Heading: React.FC<Props> = ({ children, capeColor, ...props }) => {
  return (
    <HeadingContainer {...props}>
      <Cape capeColor={capeColor} />
      <Text>{children}</Text>
    </HeadingContainer>
  );
};

export type Props = {
  children: string;
  capeColor?: string;
};
