import React from "react";

export default function Name({ playerName }) {
  const name = playerName.split(" ")[0];
  const surname = playerName.split(" ")[1];
  return (
    <div className="sheet__item">
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
    </div>
  );
}
