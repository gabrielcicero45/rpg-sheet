import { useState } from 'react';

export const useInput = (initialValue) => {
  const [value, setValue] = useState(()=>{
    const storedValue = JSON.parse(window.localStorage.getItem("player"));
    return storedValue || initialValue
  });

  const handleInputChange = (event) => {
    console.log({
      ...value,
    [event.target.name]: event.target.value
    })
    setValue({
      ...value,
    [event.target.name]: event.target.value
    });
  }

  return { value, setValue, handleInputChange};
}