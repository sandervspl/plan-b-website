import React from 'react';
import { totalDkpForGraph } from 'ducks/user/selectors';
import { useSelector } from 'hooks';
import { EmptyStateText } from 'common';
import Graph from '../Graph';
import { GraphsContainer } from './styled';

const Graphs: React.FC<Props> = () => {
  const dkpHistory = useSelector(totalDkpForGraph);
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (!dkpHistory) {
    return <EmptyStateText>You have no DKP history yet.</EmptyStateText>;
  }

  if (isMobile) {
    return null;
  }

  return (
    <GraphsContainer>
      <Graph data={dkpHistory} dataKey="yValue" title="DKP Total" />
      <Graph data={dkpHistory} dataKey="yValue" title="Guild DKP Average" />
    </GraphsContainer>
  );
};

export type Props = {

};

export default Graphs;
