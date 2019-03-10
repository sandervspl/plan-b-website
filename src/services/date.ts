import Intl from 'intl';
import 'intl/locale-data/jsonp/en-GB.js';

// Format references:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
export const defaultFormat = { day: 'numeric',  month: 'long', year: 'numeric' };

export const getDate = (date: Date, format?: Intl.DateTimeFormatOptions) => (
  new Intl.DateTimeFormat('en-GB', format || defaultFormat).format(new Date(date))
);
