import React, { useState, useEffect } from "react";

export default function LevelAndXp({ lvl, xp, updateLevel }) {
  const [experience, setExperience] = useState(xp);
  const [level, setLevel] = useState(lvl);

  //This formula is based on D&D 3 edition character advancement
  const nextLevelXP = (level) => {
    return (level * level - level) * 500;
  };

  useEffect(() => {
    const calculateLevel = (experience) =>
      experience >= nextLevelXP(level) ? setLevel((level) => level + 1) : "";
      updateLevel(level)
      calculateLevel(experience);
    }, [level,experience,updateLevel]);

  return (
    <div className="sheet__item">
      <p>Level: {level}</p>
      <p>
        Xp: {experience} / {nextLevelXP(level)}
      </p>
      <button
        onClick={() => {
          setExperience((experience) => experience + 300);
        }}
      >
        +XP
      </button>
    </div>
  );
}
