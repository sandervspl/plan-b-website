import React from 'react';
import TimeIcon from 'vectors/time.svg';
import { timeAgo } from 'services';
import { DateContainer } from './styled';

export const DateText: React.FC<DateProps> = ({ date }) => {
  return (
    <DateContainer>
      <TimeIcon />
      {timeAgo(new Date(date))}
    </DateContainer>
  );
};

export type DateProps = {
  date: Date | string;
};
