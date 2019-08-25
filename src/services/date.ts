import Intl from 'intl';
import 'intl/locale-data/jsonp/en-GB.js';

// Format references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
const defaultFormat: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export const getDate = (date: Date | string, format?: Intl.DateTimeFormatOptions) => (
  new Intl.DateTimeFormat('en-GB', format || defaultFormat).format(new Date(date))
);

const dateWithTimeFormat: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short',
};

export const getDateWithTime = (date: Date | string) => getDate(date, dateWithTimeFormat);

const humanDateFormat: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export const humanDate = (date: Date | string) => getDate(date, humanDateFormat);
