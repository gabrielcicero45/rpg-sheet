import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import axe from "./assets/axe.png";

function App() {
  const player = {
    name: "Cicero Gabriel",
    health: 12,
    mana: 50,
    xp: 0,
    attributes: {
      strength: 50,
      wisdom: 50, 
      intelligency: 50, 
      agility: 50, 
      charisma: 50, 
      dexterity: 50
    },
    rpgClass: "bard",
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
