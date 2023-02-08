import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import axe from "./assets/axe.png";
import player from './player'

function App() {
  return (
    <div className="App">
      <img className="img__axe--left" src={axe} alt="Axe" />
      <h1>Rpg Sheet</h1>
      <Sheet player={player} />
      <img className="img__axe--right"  src={axe} alt="Axe" />
    </div>
  );
}

export default App;
