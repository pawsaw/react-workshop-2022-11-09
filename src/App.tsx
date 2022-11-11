import './App.css';
import { Counter } from './components/Counter';
import { SimpleName } from './components/SimpleName';

function App() {
  return (
    <div>
      <h1>Book Manager</h1>
      <SimpleName />
      <Counter />
      <Counter />
    </div>
  );
}

export default App;
