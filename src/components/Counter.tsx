import { useState } from 'react';

interface CounterProps {
  initialValue?: number;
  step?: number;
}

export function Counter({ initialValue = 0, step = 1 }: CounterProps) {
  const [count, setCount] = useState(initialValue);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + step)}>Increment</button>
      <button onClick={() => setCount(count - step)}>Decrement</button>
    </div>
  );
}
