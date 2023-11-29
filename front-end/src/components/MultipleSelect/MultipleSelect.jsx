import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const MultipleSelect = ({ list, title, selectedOptions }) => {
  const [listItem, setListItem] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setListItem(Array.isArray(value) ? value : [value]);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{title}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={listItem}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          renderValue={(selected) => (selected.length > 0 ? selected.join(', ') : 'Selecione')}
        >
          {list.map((item) => (
            <MenuItem key={item} value={item}>
              <Checkbox checked={selectedOptions && selectedOptions.includes(item)} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
