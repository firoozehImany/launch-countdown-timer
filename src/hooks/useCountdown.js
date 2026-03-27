import { useState, useEffect } from 'react';
import { toTotalSeconds, getDHMS } from '../ utils/timeUtils';

export function useCountdown(d, h, m, s) {
  const [timeLeft, setTimeLeft] = useState(toTotalSeconds(d, h, m, s));

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  return getDHMS(timeLeft);
}