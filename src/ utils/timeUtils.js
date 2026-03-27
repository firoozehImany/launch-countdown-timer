import { SECONDS_IN_DAY, SECONDS_IN_HOUR, SECONDS_IN_MINUTE } from '../constants/time';

export const toTotalSeconds = (days, hours, minutes, seconds) => {
  return (days * SECONDS_IN_DAY) + (hours * SECONDS_IN_HOUR) + (minutes * SECONDS_IN_MINUTE) + seconds;
};

export const getDHMS = (totalSeconds) => {
  const d = Math.floor(totalSeconds / SECONDS_IN_DAY);
  const h = Math.floor((totalSeconds % SECONDS_IN_DAY) / SECONDS_IN_HOUR);
  const m = Math.floor((totalSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE);
  const s = totalSeconds % SECONDS_IN_MINUTE;

  return {
    days: String(d).padStart(2, '0'),
    hours: String(h).padStart(2, '0'),
    minutes: String(m).padStart(2, '0'),
    seconds: String(s).padStart(2, '0'),
  };
};