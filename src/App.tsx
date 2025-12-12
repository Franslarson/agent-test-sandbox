import { useState, useCallback } from 'react';
import { Counter } from './components/Counter';
import { ColorPicker } from './components/ColorPicker';
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
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="app">
      <h1>Agent Test Sandbox</h1>
      <ColorPicker selectedColor={selectedColor} onColorChange={setSelectedColor} />
      <Counter min={0} max={10} color={selectedColor} />
      <History history={history} />
    </div>
  );
}

export default App;
