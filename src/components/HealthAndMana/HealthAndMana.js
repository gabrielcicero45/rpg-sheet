import React, {useState} from "react";
import "./HealthAndMana.css";


export default function HealthAndMana({ health, mana, level }) {
  const baseStatus = 90;
  const maxStatus = baseStatus + level * 10;
  

  const [healthStatus,setHealthStatus] = useState(health)
  const [manaStatus,setManaStatus] = useState(mana)
  return (
    <>
      <div className="sheet__item">
        Health: {healthStatus > maxStatus ? maxStatus : healthStatus}/{maxStatus}
        <div className="bar">
          <div
            className="health-bar"
            style={{ width: `${(healthStatus / maxStatus) * 100}%` }}
          ></div>
        </div>
        Mana: {manaStatus > maxStatus ? maxStatus : manaStatus}/{maxStatus}
        <div className="bar">
          <div
            className="mana-bar"
            style={{ width: `${(manaStatus / maxStatus) * 100}%` }}
          ></div>
        </div>
        <button
        onClick={() => {
          setHealthStatus(healthStatus => healthStatus = maxStatus)
        }}
      >
        Restore Health
      </button>
      <button
        onClick={() => {
          setManaStatus(manaStatus => manaStatus = maxStatus)
        }}
      >
        Restore Mana
      </button>
      </div>
    </>
  );
}
