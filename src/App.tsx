import { useState, useCallback } from 'react';
import { Counter } from './components/Counter';
import { ColorPicker } from './components/ColorPicker';
import { History } from './components/History';
import './App.css';

function App() {
  const [history] = useState<number[]>([]);
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
