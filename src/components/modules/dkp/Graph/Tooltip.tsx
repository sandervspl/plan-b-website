import React from 'react';
import { TooltipProps } from 'recharts';
import { humanDate } from 'services';
import { DateText } from 'common';
import { TooltipContainer } from './styled';

const Tooltip: React.FC<TooltipProps> = ({ active, payload }) => {
  const data = payload && payload[0];

  if (active && data) {
    return (
      <TooltipContainer>
        <strong>{data.value}</strong> {data.name}
        <DateText
          date={data.payload!.date}
          format={humanDate(data.payload!.date)}
        />
      </TooltipContainer>
    );
  }

  return null;
};

export type Props = {

};

export default Tooltip;
