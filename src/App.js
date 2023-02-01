import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import axe from "./assets/axe.png";

function App() {
  const player = {
    name: "Cicero Gabriel",
    rpgClass: "bard",
    health: 20,
    mana: 50,
    xp: 300,
    attributes: {
      strength: 16,
      wisdom: 50, 
      intelligency: 50, 
      agility: 50, 
      charisma: 50, 
      dexterity: 50
    },
    abilities: [
      {
        name: 'Sing with me',
        description: 'Dream on',
        manaCost: 10
      },
      {
        name: 'Sing for the year',
        description: 'Dream on',
        manaCost: 10
      },
      {
        name: 'Sing for laughter',
        description: 'Dream on',
        manaCost: 10
      },
      {
        name: 'Sing for the tear',
        description: 'Dream on',
        manaCost: 10
      },
    ],
    inventory: [

      {map: { weight: 0.5, type: 'item', description: 'map of the world' },
       amount: 1,
      },
      {
        mage_robes: { weight: 1.5, type: 'armor', description: 'magic resistant armor' },
        amount:1
      },
      {
        great_bow: { weight: 2, type: 'weapon', description: 'bow common used for hunting' },
        amount:1,
      },
      {
        torch: { weight: 0.5, type: 'item', description: 'ligthen your path' },
        amount:1
      },
      {
        rope: { weight: 0.5, type: 'item', description: 'you always need one' },
        amount: 2,
      },
      {
        food_rations: { weight: 0.1, type: 'item', description: 'feed yourself!' },
        amount: 5,
      },
      {
        health_potion: { weight: 0.1, type: 'item', description: 'Recover 10 health points' },
        amount: 1,
      },
      {
        spell_book: { weight: 4, type: 'item', description: 'this combines very well witht he magic wand' },
        amount: 7,
      }
    ]
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
