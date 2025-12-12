interface CounterProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

export function Counter({ count, onIncrement, onDecrement, onReset }: CounterProps) {
  return (
    <div className="counter">
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
