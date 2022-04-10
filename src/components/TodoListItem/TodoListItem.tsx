import React, { ChangeEvent, FC, ReactElement, useState } from 'react';
import { Box, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './styles';
import { TodoListProps } from '../../pages/Todos/interface';
import { Link } from 'react-router-dom';

const TodoListItem: FC<TodoListProps> = ({ todo, onChange, onDelete, onEdit }): ReactElement => {
  const { id, valueTodo, isDone } = todo;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(valueTodo);

  const classes = useStyles();

  const handleCheckedChange = (): void => {
    onChange(id);
  };
  const handleOnDelete = (): void => {
    onDelete(id);
  };
  const handleOnEdit = (): void => {
    setEditMode(true);
  };
  const handleOnChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  return (
    <Box className={classes.item} key={id}>
      {editMode ? (
        <TextField
          value={value}
          onChange={handleOnChangeValue}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onEdit(id, value);
            }
          }}
        />
      ) : (
        <Link to={`/todos/${id}`}>
          <Typography className={isDone ? classes.itemDone : ''}>{valueTodo}</Typography>
        </Link>
      )}
      <Box>
        <Checkbox checked={isDone} onChange={handleCheckedChange} inputProps={{ 'aria-label': 'controlled' }} />
        <IconButton aria-label="edit" onClick={handleOnEdit}>
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
