import './App.css';
import Game from './components/game';
import Board from './components/board';
import Square from './components/square';

function App() {
  return (
    <div className="App">
      <Square />
      <Board />
      <Game />
    </div>
  );
}

export default App;
