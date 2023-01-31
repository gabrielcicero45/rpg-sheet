import React from 'react'
import './RpgClass.css'
import artificer from '../../assets/icons/artificer.jpeg'
import barbarian from '../../assets/icons/barbarian.jpeg'
import bard from '../../assets/icons/bard.jpeg'
import cleric from '../../assets/icons/cleric.jpeg'
import druid from '../../assets/icons/druid.jpeg'
import fighter from '../../assets/icons/fighter.jpeg'
import monk from '../../assets/icons/monk.jpeg'
import paladin from '../../assets/icons/paladin.jpeg'
import ranger from '../../assets/icons/ranger.jpeg'
import rogue from '../../assets/icons/rogue.jpeg'
import sorcerer from '../../assets/icons/sorcerer.jpeg'
import warlock from '../../assets/icons/warlock.jpeg'
import wizard from '../../assets/icons/wizard.jpeg'

export default function RpgClass({rpgClass}) {
  const findIcon = (rpgClass)=>{
    console.log(rpgClass)
    switch (rpgClass){
      case 'artificer':
        return artificer;
      case 'barbarian':
        return barbarian ;
      case 'bard':
         return bard;
      case 'cleric':
        return cleric;
      case 'druid':
        return druid;
      case 'fighter':
        return fighter;
      case 'monk':
        return monk;
      case 'paladin':
        return paladin;
      case 'ranger':
        return ranger;
      case 'rogue':
        return rogue;
      case 'sorcerer':
        return sorcerer;
      case 'warlock':
        return warlock;
      case 'wizard':
        return wizard;
      default:
    }
  }
  
  return (
    <div className="sheet__item--rpg-class">
    Class: <img className="sheet__item--icon" src={findIcon(rpgClass)} alt="" /> {rpgClass}
    </div>
  )
}
