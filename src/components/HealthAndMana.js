import React from 'react'

export default function HealthAndMana({health,mana,level}) {
  const baseHealth = 90
  const baseMana = 90
  const maxHealth = baseHealth + (level*10)
  const maxMana = baseMana + (level*10)
  return (
    <>
    <div className="sheet__item">Health: {health>maxHealth ? maxHealth:health}/{maxHealth}</div>
    <div className="sheet__item">Mana: {mana>maxMana ? maxMana:mana}/{maxMana}</div>
    </>
  )
}
