import React, { useState } from 'react'
import TextField from '@mui/material/TextField';

const Field = ({ label, type, inputChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    inputChange(event.target.value)
  };

  return (
       <TextField fullWidth id="outlined-basic" label={label} variant="outlined" type={type} onChange={e => handleChange(e)}/>
  )
}

export default Field