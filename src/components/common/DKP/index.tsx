import React from 'react';
import { useSelector } from 'hooks';
import { DKPContainer, DKPIcon } from './styled';

export const DKP: React.FC = () => {
  const dkp = useSelector((state) => state.user.data && state.user.data.dkp);

  return (
    <DKPContainer>
      <DKPIcon />
      <strong>{dkp}</strong> DKP
    </DKPContainer>
  );
};
