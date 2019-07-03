import * as i from 'types';
import React from 'react';
import { getCmsUrl } from 'services';
import { ClassTextContainer, ClassIcon } from './style';

const ClassText: React.FC<Props> = ({ plrClass, as }) => {
  return (
    <ClassTextContainer as={as} data-shadow-text={plrClass.name} color={plrClass.color}>
      <ClassIcon src={getCmsUrl(plrClass.icon.url)} />
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
