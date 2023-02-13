import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import { useForm } from "./hooks/useForm";
import axe from "./assets/axe.png";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import {useLocalStorage} from './hooks/useLocalStorage'

function App() {
  const initialPlayer = {
    name: "",
    surname: "",
    level: 1,
    xp: 0,
    rpgClass: "",
  }
  const playerStored = useLocalStorage("player", initialPlayer);

  const { 
    value: player, 
    handleInputChange: handlePlayerChange, 
    setValue: setPlayer
  } = useForm(initialPlayer);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    playerStored.handleSave(player)
    setPlayer(initialPlayer)
  };

  const handleReset = () => {
    playerStored.handleReset();
    setPlayer(initialPlayer)
  };
  
  return (
    <div className="App">
      <CharacterForm
        player={player}
        handlePlayerChange={handlePlayerChange}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />

      {playerStored.value.rpgClass && <Sheet player={playerStored.value} /> }
      <img className="img__axe--left" src={axe} alt="Axe" />
      <img className="img__axe--right" src={axe} alt="Axe" />
    </div>
  );
}

export default App;
