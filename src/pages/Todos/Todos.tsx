import React, { ChangeEvent, useState, MouseEvent } from 'react';
import { Box, Checkbox, IconButton, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useStyles } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';

const Todos = () => {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [alignment, setAlignment] = useState('all');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleCheckedChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleFilterChange = (event: MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <Box className={classes.todoContainer}>
      <Box className={classes.addTodo}>
        <TextField
          className={classes.addTodoInput}
          label="Add Todo"
          onChange={handleChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              console.log('Enter key pressed');
            }
          }}
        />

        <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleFilterChange}>
          <ToggleButton className={classes.filterButton} value="all">
            All
          </ToggleButton>
          <ToggleButton value="todo">Todo</ToggleButton>
          <ToggleButton value="done">Done</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={classes.item}>
        <Typography>{value}</Typography>
        <Box>
          <Checkbox checked={checked} onChange={handleCheckedChange} inputProps={{ 'aria-label': 'controlled' }} />
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Todos;
