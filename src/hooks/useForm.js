import { useState } from 'react';

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  
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