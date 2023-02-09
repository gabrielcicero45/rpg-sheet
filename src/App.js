import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import { useInput } from "./hooks/useInput";
import axe from "./assets/axe.png";
import CharacterForm from "./components/CharacterForm/CharacterForm";
import { useState } from "react";

function App() {
  const [playerStored, setPlayerStored] = useState(JSON.parse(window.localStorage.getItem("player")))
  const {
    value: player,
    handleInputChange: handlePlayerChange,
  } =  useInput({});


  const loadSheet = ()=>{
    setPlayerStored(JSON.parse(window.localStorage.getItem("player")));
  }
  
  return (
    <div className="App">
      <CharacterForm 
      player={player}
      handlePlayerChange = { handlePlayerChange }
      loadSheet ={loadSheet}
      />
      
      {playerStored ?  <Sheet player = {playerStored}/> : ''} 
      <img className="img__axe--left" src={axe} alt="Axe" />
      <img className="img__axe--right"  src={axe} alt="Axe" />
    </div>
  );
}

export default App;
