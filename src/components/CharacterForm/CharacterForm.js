import React, { useState } from "react";
import "./CharacterForm.css";

export default function CharacterForm({
  player,
  handlePlayerChange,
  handleReset,
  handleSubmit,
}) {
  const [resetDialog, setResetDialog] = useState(false);
  const { name, surname, level, xp, health, mana, rpgClass } = player;
  const maxHealth = level * 10;
  const maxMana = level * 2 + xp;
  const rpgClasses = [
    "artificer",
    "barbarian",
    "bard",
    "cleric",
    "druid",
    "fighter",
    "monk",
    "paladin",
    "ranger",
    "rogue",
    "sorcerer",
    "warlock",
    "wizard",
  ];

  return (
    <div>
      <h1>Character Form</h1>
      <form
        className="form__container"
        onSubmit={handleSubmit}
        onReset={() => {
          setResetDialog(true);
        }}
      >
        <div>
          <label hmtlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handlePlayerChange}
          />
          <label hmtlFor="surname">Surname:</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Surname"
            value={surname}
            onChange={handlePlayerChange}
          />
        </div>
        <div>
          <label hmtlFor="level">Level:</label>
          <input
            type="number"
            name="level"
            id="level"
            value={level}
            onChange={handlePlayerChange}
            min={1}
          />

          <label hmtlFor="xp">XP:</label>
          <input
            type="number"
            name="xp"
            id="xp"
            value={xp}
            onChange={handlePlayerChange}
            min={0}
          />
        </div>

        <div>
          <label hmtlFor="health">Health:</label>
          <input
            type="number"
            name="health"
            id="health"
            value={health}
            onChange={handlePlayerChange}
            min={0}
            max={maxHealth || 0}
          />

          <label hmtlFor="mana">Mana:</label>
          <input
            type="number"
            name="mana"
            id="mana"
            value={mana}
            onChange={handlePlayerChange}
            min={0}
            max={maxMana || 0}
          />
        </div>

        <div className="rpg-class__container">
          <span>Classes:</span>
          <span className="break-column"></span>
          <div className="rpg-class__column">
            {rpgClasses.map((rpgClass) => {
              return (
                  <label htmlfor={rpgClass}>
                  <input
                    type="radio"
                    id={rpgClass}
                    key={rpgClass}
                    name="rpgClass"
                    value={rpgClass}
                    checked={rpgClass}
                    onChange={handlePlayerChange}
                  />
                  {rpgClass}
                  </label>
              );
            })}
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
          <input type="reset" value="Reset" />
        </div>
      </form>
      {resetDialog && (
        <div className="reset-dialog__container">
          <p>Are you sure you want to reset the form and saved data?</p>

          <button
            onClick={() => {
              handleReset();
              setResetDialog(false);
            }}
          >
            Confirm
          </button>
          <button
            onClick={() => {
              setResetDialog(false);
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
