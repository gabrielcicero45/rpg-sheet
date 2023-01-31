import React from 'react'
import Attributes from '../Attributes/Attributes'
import RpgClass from '../RpgClass/RpgClass'
import HealthAndMana from '../HealthAndMana/HealthAndMana'
import LevelAndXp from '../LevelAndXp/LevelAndXp'
import Name from '../Name/Name'
import './Sheet.css'
export default function Sheet({player}) {
  const {name,health,mana,xp,attributes,rpgClass} =player
  const calculateLevel = (xp) => {
    if (xp>=0 && xp<300)
      return 1
    else if (xp<900)
      return 2
    else if (xp<2700)
      return 3
    else if (xp<6500)
      return 4
    else if (xp<14000)
      return 5
    else if (xp<23000)
      return 6
    else if (xp<34000)
      return 7
  }

  return (
    <>
    <div className='sheet__container'>
      <div className="sheet__column">
        <Name playerName={name}/>
      </div>
      <div className="sheet__column">
        <HealthAndMana health={health} mana={mana} level={calculateLevel(xp)} />
      </div>
      <div className="sheet__column">
        <LevelAndXp level={calculateLevel(xp)} xp={xp}/>
      </div>
    </div>
    <div className="sheet__container">
      <div className="sheet__column">
        <Attributes attributes={attributes}/>
      </div>
      <div className="sheet__column">
        <RpgClass rpgClass={rpgClass}/>
      </div>
      
    </div>
    {health<=0 && <h1>You are Dead !</h1>}
    </>
  )
}
