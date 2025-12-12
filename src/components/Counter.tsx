import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  min?: number;
  max?: number;
  color?: string;
}

export function Counter({ min, max, color }: CounterProps) {
  const { count, increment, decrement, reset } = useCounter(0);

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
    </div>
  );
}
