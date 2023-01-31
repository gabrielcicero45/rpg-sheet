import "./App.css";
import Sheet from "./components/Sheet";
import axe from "./axe.png";

function App() {
  const player = {
    name: "Cicero Gabriel",
    health: 100,
    mana: 0,
    xp: 0,
  };

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
