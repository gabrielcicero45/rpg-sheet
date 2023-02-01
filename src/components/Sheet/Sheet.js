import React from 'react'
import Attributes from '../Attributes/Attributes'
import RpgClass from '../RpgClass/RpgClass'
import HealthAndMana from '../HealthAndMana/HealthAndMana'
import LevelAndXp from '../LevelAndXp/LevelAndXp'
import Name from '../Name/Name'
import './Sheet.css'
import Ability from '../Ability/Ability'
import Inventory from '../Inventory/Inventory'
export default function Sheet({player}) {
  const {name,health,mana,xp,attributes,rpgClass,abilities,inventory} = player
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
        <RpgClass rpgClass={rpgClass}/>
        <Name playerName={name}/>
        <HealthAndMana health={health} mana={mana} level={calculateLevel(xp)} />
        <LevelAndXp level={calculateLevel(xp)} xp={xp}/>
      </div>
    </div>
    {health<=0 && 
    <div className='sheet__container'>
      <div className="sheet__column">
        <h1>You are Dead !</h1>
      </div>
    </div>
    }
    <div className="sheet__container">
      <div className="sheet__column">
        <Attributes attributes={attributes}/>
        <table>
          <tr>
            <th className="table__title" colSpan={3}>Abilities</th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Mana Cost</th>
          </tr>
          {abilities.map(({name,description,manaCost})=>{return <Ability key={name} name={name} description={description} manaCost={manaCost}/>})}
        </table>
      </div>
    </div>
    <div className="sheet__container">
      <div className="sheet__column">
        <Inventory strength={attributes.strength} inventory={inventory} />
      </div>
    </div>
    </>
  )
}
