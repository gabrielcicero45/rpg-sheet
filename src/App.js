import "./App.css";
import Sheet from "./components/Sheet/Sheet";
import axe from "./assets/axe.png";

function App() {
  const inventory = {
    map: { weight: 0.5, type: 'item', description: 'map of the world' },
    wooden_staff: { weight: 2, type: 'weapon', description: 'staff made of maple wood' },
    battle_axe: { weight: 10, type: 'weapon', description: 'steel axe made for cutting through armor' },
    health_potion: { weight: 0.1, type: 'item', description: 'Recover 10 health points' },
    leather_armor: { weight: 2, type: 'armor', description: 'light and flexible armor' },
    mage_robes: { weight: 1.5, type: 'armor', description: 'map of the world' },
    magic_wand: { weight: 1, type: 'weapon', description: 'used to make magic! avada kedrava' },
    food_rations: { weight: 0.1, type: 'item', description: 'feed yourself!' },
    compound_bow: { weight: 4, type: 'weapon', description: 'precise bow to shoot far away targets' },
    great_bow: { weight: 2, type: 'weapon', description: 'bow common used for hunting' },
    halberd: { weight: 5, type: 'weapon', description: 'the most efficient weapon' },
    plate_armor: { weight: 10, type: 'armor', description: 'full body heavy armor' },
    short_sword: { weight: 3, type: 'weapon', description: 'a soldier always needs a shortsword' },
    dagger: { weight: 1, type: 'weapon', description: 'the weapon of the rogues' },
    wooden_club: { weight: 2.5, type: 'weapon', description: 'this will bonk your enemies' },
    book_collection: { weight: 2, type: 'item', description: 'bring knowledge with you' },
    mana_potion: { weight: 0.1, type: 'item', description: 'Recover 5 mana points' },
    torch: { weight: 0.5, type: 'item', description: 'ligthen your path' },
    rope: { weight: 0.5, type: 'item', description: 'you always need one' },
    climbing_gear: { weight: 1, type: 'item', description: 'for when you cant climb on your own' },
    spell_book: { weight: 4, type: 'item', description: 'this combines very well witht he magic wand' },
    alchemist_gear: { weight: 4, type: 'item', description: 'how to craft potions 101' },
    breastplate: { weight: 6, type: 'armor', description: 'a nice armor for your chest' },
    enchanted_necklace: { weight: 2, type: 'item', description: 'they say its enchanted but the effect its unkown' },
  }
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
