import React from 'react';
import { AreaChart, Area, Tooltip as RechartsTooltip } from 'recharts';
import { theme } from 'styles';
import Tooltip from './Tooltip';
import { GraphContainer, Title, LatestValue, DKPIcon, DiffValue, DiffArrowIcon } from './styled';

const Graph: React.FC<Props> = ({ data, dataKey, title }) => {
  const latestValue = data[data.length - 1][dataKey] as number;
  const prevValue = data[data.length - 2][dataKey] as number;
  const diffValue = ((latestValue - prevValue) / prevValue).toFixed(1);
  const positiveDiff = Number(diffValue) >= 0;

  return (
    <GraphContainer>
      <Title>{title}</Title>

      <LatestValue>
        <DKPIcon />
        {latestValue}
      </LatestValue>

      <DiffValue positive={positiveDiff}>
        {diffValue}%
        <DiffArrowIcon positive={positiveDiff} />
      </DiffValue>

      <AreaChart width={370} height={90} data={data}>
        <RechartsTooltip content={<Tooltip />} />
        <Area
          dataKey={dataKey}
          fill={theme.color.graph.fill.total}
          stroke={theme.color.graph.border.total}
          strokeWidth={2}
        />
      </AreaChart>
    </GraphContainer>
  );
};

export type Props = {
  data: Record<string, string | number | Date>[];
  dataKey: string;
  title: string;
};

export default Graph;
