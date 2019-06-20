import * as i from 'types';
import React from 'react';
import { getSourceUrl } from 'services';
import { ClassTextContainer, ClassIcon } from './style';

const ClassText: React.FC<Props> = ({ plrClass, as }) => {
  return (
    <ClassTextContainer as={as} data-shadow-text={plrClass.name} color={plrClass.color}>
      {plrClass.icon && <ClassIcon src={getSourceUrl(plrClass.icon.url)} />}
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
