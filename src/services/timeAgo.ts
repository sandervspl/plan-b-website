import en from 'javascript-time-ago/locale/en';
import TimeAgo from 'javascript-time-ago';

TimeAgo.addLocale(en);
const timeAgoInstance = new TimeAgo('en-GB');

export const timeAgo = (date: Date) => timeAgoInstance.format(date);
