import React from "react";

export default function Attributes({ attributes }) {
  const { strength, dexterity, agility, intelligency, wisdom, charisma } =
    attributes;
  return (
    <table className="sheet__item">
      <thead>
        <tr>
          <th className="table__title">Attributes</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Strength: {strength}</td>
        </tr>
        <tr>
          <td>Dexterity: {dexterity}</td>
        </tr>
        <tr>
          <td>Agility: {agility}</td>
        </tr>
        <tr>
          <td>Intelligency: {intelligency}</td>
        </tr>
        <tr>
          <td>Wisdom: {wisdom}</td>
        </tr>
        <tr>
          <td>Charisma: {charisma}</td>
        </tr>
      </tbody>
    </table>
  );
}
