import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import { useInput } from "./hooks/useInput";
import axe from "./assets/axe.png";
import CharacterForm from "./components/CharacterForm/CharacterForm";

function App() {
  const {
    value: name,
    handleInputChange: handleNameChange
  } = useInput("Name");
  const {
    value: surname,
    handleInputChange: handleSurnameChange
  } = useInput("Surname");
  return (
    <div className="App">
      <CharacterForm name={name} surname={surname} handleNameChange={handleNameChange} handleSurnameChange={handleSurnameChange}/>
      <img className="img__axe--left" src={axe} alt="Axe" />
      <Sheet name={name} surname={surname}/>
      <img className="img__axe--right"  src={axe} alt="Axe" />
    </div>
  );
}

export default App;
