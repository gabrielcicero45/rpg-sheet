import React from "react";
import "./CharacterForm.css";
export default function CharacterForm({
  name,
  handleNameChange,
  surname,
  handleSurnameChange,
}) {
  return (
    <div>
      <h1>Character Form</h1>
      <form className="form__container">
        <div>
          <label hmtlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder={name}
            onChange={handleNameChange}/>
          <label hmtlFor="surname">Surname:</label>
          <input 
          type="text" 
          name="surname" 
          id="surname" 
          value={surname}
          onChange={handleSurnameChange}/>
        </div>
        <div>
          <label hmtlFor="level">Level:</label>
          <input type="number" name="level" id="level" min={1} />

          <label hmtlFor="xp">XP:</label>
          <input type="number" name="xp" id="xp" min={0} />
        </div>

        <div>
          <label hmtlFor="health">Health:</label>
          <input type="number" name="health" id="health" min={0} />

          <label hmtlFor="mana">Mana:</label>
          <input type="number" name="mana" id="mana" min={0} />
        </div>

        <div className="rpg-class__container">

          <span>Classes:</span>
          <span className="break-column"></span>
          <div className="rpg-class__column">
            <input type="radio" id="artificer" name="radioGroup" />
            <label htmlFor="artificer">artificer</label>
            <input type="radio" id="barbarian" name="radioGroup" />
            <label htmlFor="barbarian">barbarian</label>
            <input type="radio" id="bard" name="radioGroup" />
            <label htmlFor="bard">bard</label>
            <input type="radio" id="cleric" name="radioGroup" />
            <label htmlFor="cleric">cleric</label>
          </div>
          <div className="rpg-class__column">
            <input type="radio" id="druid" name="radioGroup" />
            <label htmlFor="druid">druid</label>
            <input type="radio" id="fighter" name="radioGroup" />
            <label htmlFor="fighter">fighter</label>
            <input type="radio" id="monk" name="radioGroup" />
            <label htmlFor="monk">monk</label>
            <input type="radio" id="paladin" name="radioGroup" />
            <label htmlFor="paladin">paladin</label>
          </div>

          <div className="rpg-class__column">
            <input type="radio" id="ranger" name="radioGroup" />
            <label htmlFor="ranger">ranger</label>
            <input type="radio" id="rogue" name="radioGroup" />
            <label htmlFor="rogue">rogue</label>
            <input type="radio" id="sorcerer" name="radioGroup" />
            <label htmlFor="sorcerer">sorcerer</label>
            <input type="radio" id="warlock" name="radioGroup" />
            <label htmlFor="warlock">warlock</label>
          </div>
          <div className="rpg-class__column">
            <input type="radio" id="wizard" name="radioGroup" />
            <label htmlFor="wizard">wizard</label>
          </div>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
