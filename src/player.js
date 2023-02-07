const player = {
  name: "Cicero Gabriel",
  surname: "Medeiros",
  rpgClass: "bard",
  health: 20,
  mana: 50,
  level:2,
  xp: 300,
  attributes: {
    strength: 16,
    wisdom: 50,
    intelligency: 50,
    agility: 50,
    charisma: 50,
    dexterity: 50,
  },
  abilities: [
    {
      name: "Bardic Inspiration",
      description: "You can inspire others through stirring words or music. ",
      manaCost: 20,
    },
    {
      name: "Song of Rest",
      description: "You can use soothing music or oration to help revitalize your wounded allies during a short rest. ",
      manaCost: 10,
    },
    {
      name: " Minor Illusion",
      description: "You create a sound or an image of an object within range that lasts for the duration.",
      manaCost: 20,
    },
    {
      name: "Prestidigitation",
      description: "You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.",
      manaCost: 15,
    },
  ],
  inventory: [
    {
      map: { weight: 0.5, type: "item", description: "map of the world" },
      amount: 1,
    },
    {
      mage_robes: {
        weight: 1.5,
        type: "armor",
        description: "magic resistant armor",
      },
      amount: 1,
    },
    {
      great_bow: {
        weight: 2,
        type: "weapon",
        description: "bow common used for hunting",
      },
      amount: 1,
    },
    {
      torch: { weight: 0.5, type: "item", description: "ligthen your path" },
      amount: 1,
    },
    {
      rope: { weight: 0.5, type: "item", description: "you always need one" },
      amount: 2,
    },
    {
      food_rations: {
        weight: 0.1,
        type: "item",
        description: "feed yourself!",
      },
      amount: 5,
    },
    {
      health_potion: {
        weight: 0.1,
        type: "item",
        description: "Recover 10 health points",
      },
      amount: 1,
    },
    {
      spell_book: {
        weight: 4,
        type: "item",
        description: "this combines very well witht he magic wand",
      },
      amount: 7,
    },
  ],
};

export default player;
