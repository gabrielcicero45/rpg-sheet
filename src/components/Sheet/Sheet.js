import React, { useState, useMemo, useEffect } from "react";
import RpgClass from "../RpgClass/RpgClass";
import HealthAndMana from "../HealthAndMana/HealthAndMana";
import LevelAndXp from "../LevelAndXp/LevelAndXp";
import Name from "../Name/Name";
import "./Sheet.css";

export default function Sheet({player}) {
  const { name, surname, level, xp, rpgClass } = player
  const maxHealth = useMemo(()=>{return  parseInt(level)*10}, [level] )
  const maxMana = useMemo(()=>{return ( parseInt(level)*2) + parseInt(xp)}, [level,xp])
  const armour = useMemo(
    () => {return (maxHealth  + parseInt(level)* 2 + parseInt(xp)+ 1)|| 0},
    [maxHealth,level,xp]
  );
  const [health, setHealth] = useState(maxHealth)
  const [mana, setMana] = useState(maxMana)

  useEffect(() => {
    setHealth(maxHealth)
  }, [maxHealth])

  useEffect(() => {
    setMana(maxMana)
  }, [maxMana])
  
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
          <button className="form__button" onClick={()=>{setHealth(health =>  health<maxHealth ? health+=1 : maxHealth)}}>+1 Health</button>
          <button  className="form__button" onClick={()=>{setHealth(health => health>0 ? health-=1 : 0)}}>-1 Health</button>
          <button  className="form__button" onClick={()=>{setMana(mana =>  mana>0 ? mana-=1 : 0)}}>-1 Mana</button>
          <button className="form__button" onClick={()=>{setMana(mana => mana>maxMana ? mana+=1 : maxMana)}}>+1 Mana</button>
        </div>
      </div>
    </>
  );
}
