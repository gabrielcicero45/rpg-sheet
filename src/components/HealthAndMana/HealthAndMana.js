import React from 'react'
import './HealthAndMana.css'

export default function HealthAndMana({health,mana,level}) {
  const baseHealth = 90
  const baseMana = 90
  const maxHealth = baseHealth + (level*10)
  const maxMana = baseMana + (level*10)
  return (
    <>
    <div className="sheet__item">
      Health: {health>maxHealth ? maxHealth:health}/{maxHealth}
      <div class="bar">
        <div class="health-bar" style={{width: `${health/maxHealth * 100}%`}}></div>
      </div>
    </div>
    <div className="sheet__item">
      Mana: {mana>maxMana ? maxMana:mana}/{maxMana}
      <div class="bar">
        <div class="mana-bar" style={{width: `${mana/maxMana * 100}%`}}></div>
      </div>
    </div>
    </>
  )
}
