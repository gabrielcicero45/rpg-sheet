import React from 'react'
import './RpgClass.css'
import icons from '../../assets/icons'

export default function RpgClass({rpgClass}) {
  return (
    <div className="sheet__item--rpg-class">
      Class: <img className="sheet__item--icon" src={icons(rpgClass)} alt="Character Class" /> {rpgClass}
    </div>
  )
}
