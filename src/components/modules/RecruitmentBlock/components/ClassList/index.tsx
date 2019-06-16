import * as i from 'types';
import React from 'react';
import { useSelector } from 'hooks';
import ClassText from '../ClassText';
import { ClassListContainer } from './style';

const ClassList: React.FC = () => {
  const recruitment = useSelector((state) => state.recruitment);

  if (!recruitment.data) return null;
  if (!recruitment.data.classes) return null;

  return (
    <ClassListContainer>
      {recruitment.data.classes.map((plrClass) => (
        <ClassText key={plrClass.id} plrClass={(plrClass as i.ClassData)} />
      ))}
    </ClassListContainer>
  );
};

export default ClassList;
