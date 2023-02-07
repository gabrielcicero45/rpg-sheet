import React from "react";
import "./HealthAndMana.css";

export default function HealthAndMana({ health, mana }) {
  return (
    <>
      <div className="sheet__item">
        Health: {health}
        <div className="bar">
          <div className="health-bar" style={{ width: `100%` }}></div>
        </div>
        Mana: {mana}
        <div className="bar">
          <div className="mana-bar" style={{ width: `100%` }}></div>
        </div>
      </div>
    </>
  );
}
