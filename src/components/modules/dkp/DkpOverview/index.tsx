import React from 'react';
import Graphs from '../Graphs';
import { DkpOverviewContainer } from './styled';

const DkpOverview: React.FC<Props> = () => {
  return (
    <DkpOverviewContainer>
      <Graphs />
    </DkpOverviewContainer>
  );
};

export type Props = {

};

export default DkpOverview;
