import React from 'react';
import TimeIcon from 'vectors/time.svg';
import { getDate } from 'services';
import { DateContainer } from './styled';

export const DateText: React.FC<DateProps> = ({ date }) => {
  return (
    <DateContainer>
      <TimeIcon />
      {getDate(date)}
    </DateContainer>
  );
};

export type DateProps = {
  date: Date | string;
};
