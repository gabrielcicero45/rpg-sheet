import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleSave = (value) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleReset = () => {
    setValue({
      name: "",
      surname: "",
      level: 1,
      xp: 0,
      health: 0,
      mana: 0,
      rpgClass: "",
    });
    localStorage.setItem(key, JSON.stringify(value));
  };

  return { value, handleSave, handleReset };
};
