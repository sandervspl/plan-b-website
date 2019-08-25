import React from 'react';
import TimeIcon from 'vectors/time.svg';
import { timeAgo, getDateWithTime } from 'services';
import { DateContainer } from './styled';

export const DateText: React.FC<DateProps> = ({ date, noIcon, format }) => {
  return (
    <DateContainer title={getDateWithTime(date)}>
      {!noIcon && <TimeIcon />}
      {format || timeAgo(new Date(date))}
    </DateContainer>
  );
};

export type DateProps = {
  date: Date | string;
  noIcon?: boolean;
  format?: string;
};
