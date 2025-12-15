import { useState } from 'react';
import { Counter } from './components/Counter';
import { ColorPicker } from './components/ColorPicker';
import { History } from './components/History';
import { ThemeToggle } from './components/ThemeToggle';
import './App.css';

function App() {
  const [history] = useState<number[]>([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} onToggle={toggleTheme} />
      <h1>Agent Test Sandbox</h1>
      <ColorPicker selectedColor={selectedColor} onColorChange={setSelectedColor} />
      <Counter min={0} max={10} color={selectedColor} />
      <History history={history} />
    </div>
  );
}

export default App;
