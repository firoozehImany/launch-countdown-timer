import SingleCardContainer from './SingleCardContainer';
import { useCountdown } from '../hooks/useCountdown';

export default function CountdownContainer() {
  const { days, hours, minutes, seconds } = useCountdown(8, 23, 55, 41);

  return (
    <div className="flex gap-4 md:gap-8 justify-center items-center">
      <SingleCardContainer count={days} label="days" />
      <SingleCardContainer count={hours} label="hours" />
      <SingleCardContainer count={minutes} label="minutes" />
      <SingleCardContainer count={seconds} label="seconds" />
    </div>
  );
}