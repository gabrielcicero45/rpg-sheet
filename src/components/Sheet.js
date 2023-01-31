import React from 'react'
import HealthAndMana from './HealthAndMana'
import LevelAndXp from './LevelAndXp'
import Name from './Name'
import './Sheet.css'
export default function Sheet({player}) {
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
        <Name playerName={player.name}/>
      </div>
      <div className="sheet__column">
        <HealthAndMana health={player.health} mana={player.mana} level={calculateLevel(player.xp)} />
      </div>
      <div className="sheet__column">
        <LevelAndXp level={calculateLevel(player.xp)} xp={player.xp}/>
      </div>
    </div>
    {player.health<0 && <h1>You are Dead !</h1>}
    </>
  )
}
