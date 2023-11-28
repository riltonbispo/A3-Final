import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UploadIcon from '@mui/icons-material/Upload';

const InputFile = ({label}) => {
  return (
    <TextField
      fullWidth
      id="input-with-icon-textfield"
      label={label}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <UploadIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      type='file'
    />
  )
}

export default InputFile