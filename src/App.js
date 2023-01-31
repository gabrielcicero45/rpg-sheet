import "./App.css";
import Sheet from "./components/Sheet";

function App() {
  const player = {
    name: "Cicero Gabriel",
    health: 100,
    mana: 0,
    xp: 0,
  };

  return (
    <div className="App">
      <h1>Rpg Sheet</h1>
      <Sheet player={player} />
    </div>
  );
}

export default App;
