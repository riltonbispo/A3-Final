import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const MultipleSelect = ({ list, title, selectedOptions }) => {
  return (
    <div>
      <span>{title}</span>
      <FormGroup>
        {list.map(item => (
          <FormControlLabel control={<Checkbox defaultChecked={selectedOptions.includes(item)} />} label={item} />
        ))}
      </FormGroup>
    </div>
  );
};

export default MultipleSelect;

