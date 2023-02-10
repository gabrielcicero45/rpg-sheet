import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import { useInput } from "./hooks/useInput";
import axe from "./assets/axe.png";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import {useLocalStorage} from './hooks/useLocalStorage'
import { useMemo } from "react";

function App() {

  const playerStored = useLocalStorage("player", {
    name: "",
    surname: "",
    level: 1,
    xp: 0,
    health: 0,
    mana: 0,
    rpgClass: "",
  });

  const { value: player, handleInputChange: handlePlayerChange , setValue: setPlayer} = useInput({
    name: "",
    surname: "",
    level: 1,
    xp: 0,
    health: 0,
    mana: 0,
    rpgClass: "",
  });
  const maxHealth = useMemo(()=>{return  parseInt(player.level)*10}, [player.level] )
  const maxMana = useMemo(()=>{return ( parseInt(player.level)*2) + parseInt(player.xp)}, [player.level,player.xp])
  const armour = useMemo(
    () => {return (parseInt(player.health)  + parseInt(player.level)* 2 + parseInt(player.xp)+ 1)|| 0},
    [player.health,player.level,player.xp]
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    playerStored.handleSave({...player,maxHealth:maxHealth,maxMana:maxMana,armour:armour})
  };

  const handleReset = () => {
    playerStored.handleReset();
    setPlayer({
      name: "",
      surname: "",
      level: 1,
      xp: 0,
      health: 0,
      mana: 0,
      rpgClass: "",
    })
  };
  
  return (
    <div className="App">
      <CharacterForm
        player={player}
        handlePlayerChange={handlePlayerChange}
        handleReset={handleReset}
        handleSubmit={handleSubmit}
      />

      {playerStored.value.maxHealth && <Sheet player={playerStored.value} /> }
      <img className="img__axe--left" src={axe} alt="Axe" />
      <img className="img__axe--right" src={axe} alt="Axe" />
    </div>
  );
}

export default App;
