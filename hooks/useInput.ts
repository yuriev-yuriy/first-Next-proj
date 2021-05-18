import React, { useState } from "react";


export const useInput = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  return {value, onChange}
}

export const useTextarea = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  return {value, onChange}
}