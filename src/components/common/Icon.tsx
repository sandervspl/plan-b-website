import React, { HTMLAttributes } from 'react';
import { O } from 'ts-toolbelt';
import { FontAwesomeIcon, Props } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/pro-light-svg-icons';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  return (
    <FontAwesomeIcon icon={['fal', name]} {...props} />
  );
};

type IconProps = HTMLAttributes<{}> & O.Optional<Props, 'icon'> & {
  name: IconName;
};
