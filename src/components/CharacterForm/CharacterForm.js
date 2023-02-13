import React, { useState } from "react";
import "./CharacterForm.css";

export default function CharacterForm({
  player,
  handlePlayerChange,
  handleReset,
  handleSubmit,
}) {
  const [resetDialog, setResetDialog] = useState(false);
  const { name, surname, level, xp,} = player;
  const [rpgClass, setRpgClass] = useState('')
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
        className={`form__container ${rpgClass}`}
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
            className="form__input"
            placeholder="Name"
            required={true}
            value={name}
            onChange={handlePlayerChange}
          />
        </div>
        <div>
        <label hmtlFor="surname">Surname:</label>
          <input
            type="text"
            name="surname"
            id="surname"
            className="form__input"
            placeholder="Surname"
            required={true}
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
            className="form__input"
            value={level}
            onChange={handlePlayerChange}
            min={1}
          />
        </div>

        <div>
        <label hmtlFor="xp">XP:</label>
          <input
            type="number"
            name="xp"
            id="xp"
            className="form__input"
            value={xp}
            onChange={handlePlayerChange}
            min={0}
          />
        </div>


        <div className="rpg-class__container">
          <span>Classes:</span>
          <span className="break-column"></span>
          <div className="rpg-class__column" onChange={(event) => {handlePlayerChange(event); setRpgClass(event.target.value)}} >
            {rpgClasses.map((rpgClass) => {
              return (
                  <label htmlfor={rpgClass} className="rpg-class__radio">
                  <input
                    type="radio"
                    id={rpgClass}
                    key={rpgClass}
                    name="rpgClass"
                    required={true}
                    value={rpgClass}
                  />
                  {rpgClass}
                  </label>
              );
            })}
          </div>
        </div>
        <div>
          <button className="form__button" type="submit">Submit</button>
          <button  className="form__button" type="reset">Reset</button>
        </div>
      </form>
      {resetDialog && (
        <div className="reset-dialog__container">
          <p>Are you sure you want to reset the form and saved data?</p>

          <button
            className="form__button"
            onClick={() => {
              handleReset();
              setResetDialog(false);
            }}
          >
            Confirm
          </button>
          <button
            className="form__button"
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
