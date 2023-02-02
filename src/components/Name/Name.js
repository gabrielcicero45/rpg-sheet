import React from "react";

export default function Name({ playerName }) {
  const name = playerName.split(" ")[0];
  const surname = playerName.split(" ")[1];
  return (
    <>
      <div className="sheet__item">Name: {name}</div>
      <div className="sheet__item">Surname: {surname}</div>
    </>
  );
}
