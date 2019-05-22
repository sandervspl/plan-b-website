import * as i from 'types';
import React from 'react';
import { getSourceUrl } from 'services';
import { ClassTextContainer, ClassIcon } from './style';

const ClassText: React.FC<Props> = ({ plrClass }) => {
  return (
    <ClassTextContainer data-shadow-text={plrClass.name} color={plrClass.color}>
      {plrClass.icon && <ClassIcon src={getSourceUrl(plrClass.icon.url)} />}
      <span>{plrClass.name}</span>
    </ClassTextContainer>
  );
};

export type Props = {
  plrClass: i.ClassData;
};

export default ClassText;
