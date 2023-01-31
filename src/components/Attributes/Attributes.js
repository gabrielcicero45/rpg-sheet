import React from 'react'

export default function Attributes({attributes}) {
  const {strength,dexterity,agility,intelligency,wisdom,charisma} = attributes
  return (
    <>
      <div className="sheet__item">Strength: {strength}</div>
      <div className="sheet__item">Dexterity: {dexterity}</div>
      <div className="sheet__item">Agility: {agility}</div>
      <div className="sheet__item">Intelligency: {intelligency}</div>
      <div className="sheet__item">Wisdom: {wisdom}</div>
      <div className="sheet__item">Charisma: {charisma}</div>
    </>
  )
}
