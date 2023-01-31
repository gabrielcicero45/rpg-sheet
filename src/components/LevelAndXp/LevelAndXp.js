import React from "react";

export default function LevelAndXp({ level, xp }) {
  return (
    <>
      <div className="sheet__item">Level: {level}</div>
      <div className="sheet__item">Xp: {xp}</div>
    </>
  );
}
