import React from 'react';
import { AreaChart, Area, Tooltip as RechartsTooltip, ResponsiveContainer } from 'recharts';
import Tooltip from './Tooltip';
import { GraphContainer, Title, LatestValue, DKPIcon, DiffValue, DiffArrowIcon } from './styled';

const Graph: React.FC<Props> = ({ data, dataKey, title, fill, stroke }) => {
  const latestValue = data[data.length - 1][dataKey] as number;
  const prevValue = data.length >= 2 && data[data.length - 2][dataKey] as number;
  const diffValue = prevValue ? ((latestValue - prevValue) / prevValue).toFixed(1) : 0;
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

      <ResponsiveContainer width="100%" height={90}>
        <AreaChart data={data}>
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