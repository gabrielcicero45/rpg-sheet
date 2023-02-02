import React from "react";

export default function LevelAndXp({ level, xp }) {
  return (
    <div className="sheet__item">
      <p>Level: {level}</p>
      <p>Xp: {xp}</p>
    </div>
  );
}
