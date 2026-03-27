import { useState, useEffect } from "react";

export function useFlip(number) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [displayNumber, setDisplayNumber] = useState(number);

  useEffect(() => {
    if (number !== displayNumber) {
      setIsFlipping(true);
      const timer = setTimeout(() => {
        setIsFlipping(false);
        setDisplayNumber(number);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [number, displayNumber]);

  return { isFlipping, current: displayNumber, next: number };
}