import React, { useState} from 'react'
import HealthAndMana from './HealthAndMana'
import Level from './LevelAndXp'
import Name from './Name'
import './Sheet.css'
export default function Sheet({player}) {
  const [xp,setXp] = useState(player.xp)
  const [health, setHealth] = useState(player.health)
  const [mana, setMana] = useState(player.mana)
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
        <HealthAndMana health={health} mana={mana} level={calculateLevel(xp)} />
      </div>
      <div className="sheet__column">
        <Level level={calculateLevel(xp)} xp={xp}/>
      </div>
    </div>
    {health<0 && <h1>You are Dead !</h1>}
    <div className="sheet__container">
      <div className="sheet__column">
        <button onClick={()=>{setXp(xp=> xp+300)}}>Add Xp</button>
      </div>
      <div className="sheet__column">
        <button onClick={()=>{setMana(mana=> mana+5)}}>Add Mana</button>
        <button onClick={()=>{setHealth(health=> health+5)}}>Add Health</button>
      </div>
      <div className="sheet__column">
        <button onClick={()=>{setMana(mana=> mana-5)}}>Remove Mana</button>
        <button onClick={()=>{setHealth(health=> health-5)}}>Remove Health</button>
      </div>
    </div>
    </>
  )
}
