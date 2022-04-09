import React, { ChangeEvent, useState, MouseEvent, useEffect } from 'react';
import { Box, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStyles } from './styles';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import { ITodo } from '../../interfaces/interface';

const Todos = () => {
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [filteredList, setFilteredList] = useState<ITodo[]>(todoList);

  const list = filter === 'all' ? todoList : filteredList;

  console.log(filteredList);

  useEffect(() => {
    if (filter === 'done') {
      const filtered = todoList.filter((el) => el.isDone);

      setFilteredList(filtered);
    }
  }, [filter]);

  useEffect(() => {
    const todo: any = JSON.parse(localStorage.getItem('todo') as string);

    if (todo.length) {
      setTodoList(todo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleChangeFilter = (event: MouseEvent<HTMLElement>, newAlignment: string): void => {
    setFilter(newAlignment);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const addTodo = (): void => {
    if (value) {
      const newTodo = {
        valueTodo: value,
        id: Date.now(),
        isDone: false,
      };

      setTodoList([...todoList, newTodo]);
      setValue('');
    }
  };

  const onCheckBoxHandle = (id: number): void => {
    const todoId = todoList.findIndex((el) => el.id === id);
    const getId = todoList.splice(todoId, 1);

    if (getId[0]?.isDone) {
      setTodoList([{ ...getId[0], isDone: false }, ...todoList]);
    } else {
      setTodoList([...todoList, { ...getId[0], isDone: true }]);
    }
  };

  const deleteTodoHandle = (id: number): void => {
    const deleteTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(deleteTodo);
  };

  return (
    <Box className={classes.todoContainer}>
      <Box className={classes.addTodo}>
        <TextField
          value={value}
          className={classes.addTodoInput}
          label="Add Todo"
          onChange={handleChangeValue}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addTodo();
            }
          }}
        />
        <ToggleButtonGroup color="primary" value={filter} exclusive onChange={handleChangeFilter}>
          <ToggleButton className={classes.filterButton} value="all">
            All
          </ToggleButton>
          <ToggleButton value="todo">Todo</ToggleButton>
          <ToggleButton value="done">Done</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {list.map((todo: ITodo) => (
        <TodoListItem todo={todo} key={todo.id} onChange={onCheckBoxHandle} onDelete={deleteTodoHandle} />
      ))}
    </Box>
  );
};

export default Todos;
