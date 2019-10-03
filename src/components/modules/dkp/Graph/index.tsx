import React from 'react';
import { AreaChart, Area, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import Tooltip from './Tooltip';
import { GraphContainer, Title, LatestValue, DKPIcon, DiffValue, DiffArrowIcon } from './styled';

const Graph: React.FC<Props> = ({ data, dataKey, title, fill, stroke }) => {
  const latestValue = data[0] ? data[0][dataKey] as number : 0;
  const prevValue = data.length >= 2 && data[1][dataKey] as number;
  const diffValue = prevValue ? (((latestValue - prevValue) / prevValue) * 100).toFixed(1) : 0;
  const positiveDiff = Number(diffValue) >= 0;
  const graphData = [...data].reverse();

  return (
    <GraphContainer>
      <Title>{title}</Title>

      <LatestValue>
        <DKPIcon />
        {Math.round(latestValue)}
      </LatestValue>

      <DiffValue positive={positiveDiff}>
        {diffValue}%
        <DiffArrowIcon positive={positiveDiff} />
      </DiffValue>

      <ResponsiveContainer width="100%" height={90}>
        <AreaChart data={graphData}>
          <RechartsTooltip content={<Tooltip />} />
          <Area
            dataKey={dataKey}
            fill={fill}
            stroke={stroke}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};

export type Props = {
  data: Record<string, string | number | Date>[];
  dataKey: string;
  title: string;
  fill: string;
  stroke: string;
};

export default Graph;
