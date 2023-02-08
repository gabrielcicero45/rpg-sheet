import React from "react";
import RpgClass from "../RpgClass/RpgClass";
import HealthAndMana from "../HealthAndMana/HealthAndMana";
import LevelAndXp from "../LevelAndXp/LevelAndXp";
import Name from "../Name/Name";
import "./Sheet.css";

export default function Sheet({ name, surname, health, mana, level, xp, rpgClass }) {
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
          />
          <LevelAndXp level={level} xp={xp} />
        </div>
      </div>
      {health <= 0 && (
        <div className="sheet__container">
          <div className="sheet__column">
            <h1>You are Dead !</h1>
          </div>
        </div>
      )}
    </>
  );
}
