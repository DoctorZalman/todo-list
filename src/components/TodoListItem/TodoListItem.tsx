import React, { FC } from 'react';
import { Box, Checkbox, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './styles';
import { TodoListProps } from '../../pages/Todos/interface';

const TodoListItem: FC<TodoListProps> = ({ todo, onChange, onDelete }) => {
  const classes = useStyles();

  const { id, valueTodo, isDone } = todo;

  const handleCheckedChange = (): void => {
    onChange(id);
  };
  const handleOnDelete = (): void => {
    onDelete(id);
  };

  return (
    <Box className={classes.item} key={id}>
      {isDone ? (
        <Typography className={classes.itemDone}>{valueTodo}</Typography>
      ) : (
        <Typography>{valueTodo}</Typography>
      )}
      <Box>
        <Checkbox checked={isDone} onChange={handleCheckedChange} inputProps={{ 'aria-label': 'controlled' }} />
        <IconButton aria-label="edit" onClick={handleOnDelete}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleOnDelete}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TodoListItem;
