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
            <input
              type="radio"
              id="artificer"
              name="rpgClass"
              value="artificer"
              checked={rpgClass === "artificer"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="artificer">artificer</label>
            <input
              type="radio"
              id="barbarian"
              name="rpgClass"
              value="barbarian"
              checked={rpgClass === "barbarian"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="barbarian">barbarian</label>
            <input
              type="radio"
              id="bard"
              name="rpgClass"
              value="bard"
              checked={rpgClass === "bard"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="bard">bard</label>
            <input
              type="radio"
              id="cleric"
              name="rpgClass"
              value="cleric"
              checked={rpgClass === "cleric"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="cleric">cleric</label>
          </div>
          <div className="rpg-class__column">
            <input
              type="radio"
              id="druid"
              name="rpgClass"
              value="druid"
              checked={rpgClass === "druid"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="druid">druid</label>
            <input
              type="radio"
              id="fighter"
              name="rpgClass"
              value="fighter"
              checked={rpgClass === "fighter"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="fighter">fighter</label>
            <input
              type="radio"
              id="monk"
              name="rpgClass"
              value="monk"
              checked={rpgClass === "monk"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="monk">monk</label>
            <input
              type="radio"
              id="paladin"
              name="rpgClass"
              value="paladin"
              checked={rpgClass === "paladin"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="paladin">paladin</label>
          </div>

          <div className="rpg-class__column">
            <input
              type="radio"
              id="ranger"
              name="rpgClass"
              value="ranger"
              checked={rpgClass === "ranger"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="ranger">ranger</label>
            <input
              type="radio"
              id="rogue"
              name="rpgClass"
              value="rogue"
              checked={rpgClass === "rogue"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="rogue">rogue</label>
            <input
              type="radio"
              id="sorcerer"
              name="rpgClass"
              value="sorcerer"
              checked={rpgClass === "sorcerer"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="sorcerer">sorcerer</label>
            <input
              type="radio"
              id="warlock"
              name="rpgClass"
              value="warlock"
              checked={rpgClass === "warlock"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="warlock">warlock</label>
          </div>
          <div className="rpg-class__column">
            <input
              type="radio"
              id="wizard"
              name="rpgClass"
              value="wizard"
              checked={rpgClass === "wizard"}
              onChange={handlePlayerChange}
            />
            <label htmlFor="wizard">wizard</label>
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
