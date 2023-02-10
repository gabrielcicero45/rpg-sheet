import React from "react";
import "./HealthAndMana.css";

export default function HealthAndMana({ health, mana, maxHealth, maxMana }) {
  return (
    <>
      <div className="sheet__item">
        Health: {health}/ {maxHealth}
        <div className="bar">
          <div className="health-bar" style={{ width: `${health/maxHealth * 100}%` }}></div>
        </div>
        Mana: {mana}/{maxMana}
        <div className="bar">
          <div className="mana-bar" style={{ width: `${mana/maxMana * 100}%` }}></div>
        </div>
      </div>
    </>
  );
}
