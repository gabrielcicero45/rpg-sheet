import React from 'react'

export default function InventoryItem({item}) {
  const name = Object.keys(item)[0].replace('_', ' ')
  const {description,weight,type} = Object.values(item)[0];
  return (
    <tr>
    <td className="sheet__item">{name}</td>
    <td className="sheet__item">{description}</td>
    <td className="sheet__item">{type}</td>
    <td className="sheet__item">{weight}</td>
    <td className="sheet__item">{item.amount}</td>
    </tr>
  )
}
