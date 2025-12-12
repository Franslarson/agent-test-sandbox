import { useState, useCallback } from 'react';
import { Counter } from './components/Counter';
import { DoubleCounter } from './components/DoubleCounter';
import { History } from './components/History';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState<number[]>([]);

  const updateHistory = useCallback((newCount: number) => {
    setHistory((prev) => [newCount, ...prev].slice(0, 5));
  }, []);

  const increment = useCallback(() => {
    setCount((c) => {
      const newCount = c + 1;
      updateHistory(newCount);
      return newCount;
    });
  }, [updateHistory]);

  const decrement = useCallback(() => {
    setCount((c) => {
      const newCount = c - 1;
      updateHistory(newCount);
      return newCount;
    });
  }, [updateHistory]);

  const reset = useCallback(() => {
    setCount(0);
    updateHistory(0);
  }, [updateHistory]);

  return (
    <div className="app">
      <h1>Agent Test Sandbox</h1>
      <Counter
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
      <DoubleCounter />
      <History history={history} />
    </div>
  );
}

export default App;
