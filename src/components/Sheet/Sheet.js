import React from "react";
import RpgClass from "../RpgClass/RpgClass";
import HealthAndMana from "../HealthAndMana/HealthAndMana";
import LevelAndXp from "../LevelAndXp/LevelAndXp";
import Name from "../Name/Name";
import "./Sheet.css";

export default function Sheet({player}) {
  const { name, surname, health, maxHealth, mana, maxMana, armour, level, xp, rpgClass } = player

  return (
    <>
      <h1>Rpg Sheet</h1>
      <div className="sheet__container">
        <div className="sheet__column">
          <RpgClass rpgClass={rpgClass} />
          <Name name={name} surname={surname} />
          <HealthAndMana
            health={health}
            mana={mana}
            maxHealth = {maxHealth}
            maxMana = {maxMana}
          />
          <LevelAndXp level={level} xp={xp} />
          <div>Armour: {armour}</div>
        </div>
        <div className="sheet_column">
          <button>-1 Health</button>
          <button>+1 Health</button>
          <button>-1 Mana</button>
          <button>+1 Mana</button>
        </div>
      </div>
    </>
  );
}
