import React, { useState } from "react";
import Attributes from "../Attributes/Attributes";
import RpgClass from "../RpgClass/RpgClass";
import HealthAndMana from "../HealthAndMana/HealthAndMana";
import LevelAndXp from "../LevelAndXp/LevelAndXp";
import Name from "../Name/Name";
import "./Sheet.css";

import Inventory from "../Inventory/Inventory";
import AbilitiesList from "../AbilitiesList/AbilitiesList";
export default function Sheet({ player }) {
  const { name, health,mana, xp, attributes, rpgClass, abilities, inventory } =
    player;
  
  const [level,setLevel] = useState(player.level);


  const updateLevel = (level) =>{ setLevel(level)}
  
  return (
    <>
      <div className="sheet__container">
        <div className="sheet__column">
          <RpgClass rpgClass={rpgClass} />
          <Name playerName={name} />
          <HealthAndMana
            health={health}
            mana={mana}
            level={level}
          />
          <LevelAndXp lvl={level} xp={xp} updateLevel={updateLevel} />
        </div>
      </div>
      {health <= 0 && (
        <div className="sheet__container">
          <div className="sheet__column">
            <h1>You are Dead !</h1>
          </div>
        </div>
      )}
      <div className="sheet__container">
        <div className="sheet__column">
          <Attributes attributes={attributes} />
          <AbilitiesList abilities={abilities} />
        </div>
      </div>
      <div className="sheet__container">
        <div className="sheet__column">
          <Inventory strength={attributes.strength} inventory={inventory} />
        </div>
      </div>
    </>
  );
}
