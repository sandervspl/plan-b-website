import React from 'react';
import { totalDkpForGraph } from 'ducks/user/selectors';
import { useSelector } from 'hooks';
import { EmptyStateText } from 'common';
import { theme } from 'styles';
import Graph from '../Graph';
import { GraphsContainer } from './styled';

const Graphs: React.FC<Props> = () => {
  const dkpHistory = useSelector(totalDkpForGraph);
  const isMobile = useSelector((state) => state.ui.isMobile);

  if (!dkpHistory || dkpHistory.length === 0) {
    return (
      <GraphsContainer>
        <EmptyStateText>You have no DKP history yet.</EmptyStateText>
      </GraphsContainer>
    );
  }

  if (isMobile) {
    return null;
  }

  return (
    <GraphsContainer>
      <Graph
        data={dkpHistory}
        dataKey="dkp"
        title="DKP Total"
        fill={theme.color.graph.fill.total}
        stroke={theme.color.graph.border.total}
      />
      <Graph
        data={dkpHistory}
        dataKey="dkp"
        title="Guild DKP Average"
        fill={theme.color.graph.fill.average}
        stroke={theme.color.graph.border.average}
      />
    </GraphsContainer>
  );
};

export type Props = {

};

export default Graphs;
