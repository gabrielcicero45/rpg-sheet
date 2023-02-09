import { useState } from 'react';

export const useLocalStorage = (key,initialValue) => {
  const [value, setValue] = useState(initialValue);
  
  const handleSave = (value) => {
    setValue(value)
    localStorage.setItem(key, JSON.stringify(value));
  }

  const handleReset = () => {
    setValue({})
    console.log(value)
    localStorage.setItem(key, JSON.stringify(value));
  }

  return { value, handleSave,handleReset };
}