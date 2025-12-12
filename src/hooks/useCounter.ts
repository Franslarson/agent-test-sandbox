import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'counter-value';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored !== null ? Number(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(count));
  }, [count]);

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((c) => c - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);

  return { count, increment, decrement, reset };
}
