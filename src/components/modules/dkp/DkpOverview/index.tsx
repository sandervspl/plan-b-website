import React from 'react';
import Graphs from '../Graphs';
import DkpHistory from '../DkpHistory';
import { DkpOverviewContainer } from './styled';

const DkpOverview: React.FC<Props> = () => {
  return (
    <DkpOverviewContainer>
      <Graphs />
      <DkpHistory />
    </DkpOverviewContainer>
  );
};

export type Props = {

};

export default DkpOverview;
