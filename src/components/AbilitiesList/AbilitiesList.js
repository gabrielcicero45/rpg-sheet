import React from "react";
import Ability from "../Ability/Ability";

export default function AbilitiesList({ abilities }) {
  return (
    <table>
      <thead>
        <tr>
          <th className="table__title" colSpan={3}>
            Abilities
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Mana Cost</th>
        </tr>
      </thead>
      <tbody>
        {abilities.map(({ name, description, manaCost }) => {
          return (
            <Ability
              key={name}
              name={name}
              description={description}
              manaCost={manaCost}
            />
          );
        })}
      </tbody>
    </table>
  );
}
