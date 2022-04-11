import React, { FC, ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../../interfaces/interface';
import { Box, Typography } from '@mui/material';
import { useStyles } from './style';

const SingleTodo: FC = (): ReactElement => {
  const classes = useStyles();
  const { id } = useParams();
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    if (id) {
      const todos: any = JSON.parse(localStorage.getItem('todo') as string);

      const todoItem = todos.find((el: ITodo) => el.id === +id);

      setTodo(todoItem);
    }
  }, []);

  return (
    <Box className={classes.singleContainer}>
      <Box className={classes.singleItem}>
        <Typography>{todo?.valueTodo}</Typography>
      </Box>
    </Box>
  );
};

export default SingleTodo;
