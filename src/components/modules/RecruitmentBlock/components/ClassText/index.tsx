import * as i from 'types';
import React from 'react';
import { CircleIcon } from 'common';
import { ClassTextContainer } from './styled';

const ClassText: React.FC<Props> = ({ plrClass, as }) => {
  return (
    <ClassTextContainer as={as} color={plrClass.color}>
      <CircleIcon src={plrClass.icon.url} />
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
