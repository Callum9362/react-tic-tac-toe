import logo from './logo.svg';
import './App.css';
import Square from './components/square';

function App() {
  return (
    <div className="App">
      <Square value="X" onClick={() => alert('X')} />
    </div>
  );
}

export default App;
