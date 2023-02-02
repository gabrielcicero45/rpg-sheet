import React from "react";

export default function Ability({ name, description, manaCost }) {
  return (
    <tr>
      <td className="sheet__item">{name}</td>
      <td className="sheet__item">{description}</td>
      <td className="sheet__item">{manaCost}</td>
    </tr>
  );
}
