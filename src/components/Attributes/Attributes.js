import React from "react";

export default function Attributes({ attributes }) {
  const { strength, dexterity, agility, intelligency, wisdom, charisma } =
    attributes;
  return (
    <table>
      <thead>
        <tr>
          <th className="table__title">Attributes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="sheet__item">Strength: {strength}</td>
        </tr>
        <tr>
          <td className="sheet__item">Dexterity: {dexterity}</td>
        </tr>
        <tr>
          <td className="sheet__item">Agility: {agility}</td>
        </tr>
        <tr>
          <td className="sheet__item">Intelligency: {intelligency}</td>
        </tr>
        <tr>
          <td className="sheet__item">Wisdom: {wisdom}</td>
        </tr>
        <tr>
          <td className="sheet__item">Charisma: {charisma}</td>
        </tr>
      </tbody>
    </table>
  );
}
