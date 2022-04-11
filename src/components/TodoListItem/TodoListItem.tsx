import React, { ChangeEvent, FC, ReactElement, useState, KeyboardEvent } from 'react';
import { Box, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useStyles } from './styles';
import { TodoListProps } from '../../pages/Todos/interface';
import { Link } from 'react-router-dom';
import { StatusFilter } from '../../interfaces/interface';

const TodoListItem: FC<TodoListProps> = ({ todo, onChange, onDelete, onEdit }): ReactElement => {
  const { id, valueTodo, status } = todo;
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(valueTodo);
  const classes = useStyles();
  const isDone = status === StatusFilter.DONE;

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
  const onEnterPressHandle = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (value) {
        onEdit(id, value);
        setEditMode(false);
      } else {
        onDelete(id);
      }
    }
  };

  return (
    <Box className={classes.item} key={id}>
      {editMode ? (
        <TextField
          variant="standard"
          className={classes.todoActiveField}
          value={value}
          onChange={handleOnChangeValue}
          required
          error={!value}
          onKeyPress={onEnterPressHandle}
        />
      ) : (
        <Link to={`/todos/${id}`}>
          <Typography className={isDone ? classes.itemDone : ''}>{valueTodo}</Typography>
        </Link>
      )}
      <Box className={classes.controlWrapper}>
        <Checkbox
          checked={isDone}
          onChange={handleCheckedChange}
          disabled={!value}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <IconButton aria-label="edit" onClick={handleOnEdit} disabled={!value}>
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
