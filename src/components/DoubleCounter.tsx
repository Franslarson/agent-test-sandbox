import { useState } from 'react';

export function DoubleCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 2)}>Increment (+2)</button>
      <button onClick={() => setCount(count - 2)}>Decrement (-2)</button>
    </div>
  );
}
