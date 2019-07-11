import * as i from 'types';
import React from 'react';
import { getCmsUrl } from 'services';
import { useImageLoader } from 'hooks';
import { ClassTextContainer, ClassIcon } from './styled';

const ClassText: React.FC<Props> = ({ plrClass, as }) => {
  const [image] = useImageLoader(getCmsUrl(plrClass.icon.url));

  return (
    <ClassTextContainer as={as} data-shadow-text={plrClass.name} color={plrClass.color}>
      <ClassIcon src={image} />
      <span>{plrClass.name}</span>
    </ClassTextContainer>
  );
};

ClassText.defaultProps = {
  as: 'span',
};

export type Props = {
  plrClass: i.ClassData;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>; // eslint-disable-line
};

export default ClassText;
