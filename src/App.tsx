import { Counter } from './components/Counter';

import { DoubleCounter } from './components/DoubleCounter';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Agent Test Sandbox</h1>
      <Counter min={0} max={10} />
      <Counter />
      <DoubleCounter />
    </div>
  );
}

export default App;
