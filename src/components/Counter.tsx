import { useEffect, useCallback } from 'react';
import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  min?: number;
  max?: number;
  color?: string;
}

export function Counter({ min, max, color }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      const canIncrement = max === undefined || count < max;
      const canDecrement = min === undefined || count > min;

      switch (event.key) {
        case 'ArrowUp':
        case '+':
          if (canIncrement) {
            increment();
          }
          break;
        case 'ArrowDown':
        case '-':
          if (canDecrement) {
            decrement();
          }
          break;
        case 'r':
        case 'R':
          reset();
          break;
      }
    },
    [count, min, max, increment, decrement, reset]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="counter">
      <p style={{ color: color || undefined }}>Count: {count}</p>
      <button onClick={increment} disabled={max !== undefined && count >= max}>
        Increment
      </button>
      <button onClick={decrement} disabled={min !== undefined && count <= min}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
      <div className="keyboard-hints">
        <span>Keyboard: </span>
        <kbd>↑</kbd> <kbd>+</kbd> increment |
        <kbd>↓</kbd> <kbd>-</kbd> decrement |
        <kbd>R</kbd> reset
      </div>
    </div>
  );
}
