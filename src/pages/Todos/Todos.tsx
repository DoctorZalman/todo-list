import React, { ChangeEvent, useState, MouseEvent, useEffect, Fragment, FC, ReactElement, KeyboardEvent } from 'react';
import { Box, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useStyles } from './styles';
import TodoListItem from '../../components/TodoListItem/TodoListItem';
import { ITodo, StatusFilter } from '../../interfaces/interface';

const Todos: FC = (): ReactElement => {
  const { ALL, TODO, DONE } = StatusFilter;
  const classes = useStyles();
  const [value, setValue] = useState<string>('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<string>(ALL);

  const onEditHandler = (id: number, value: string) => {
    const todosEdited = todoList.reduce((acc: ITodo[], el: ITodo) => {
      if (el.id === id) {
        return [...acc, { ...el, valueTodo: value }];
      }

      return [...acc, el];
    }, []);

    setTodoList(todosEdited);
  };

  useEffect(() => {
    const todo: any = JSON.parse(localStorage.getItem('todo') as string);

    if (todo?.length) {
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
        status: TODO,
      };

      setTodoList([...todoList, newTodo]);
      setValue('');
    }
  };

  const onCheckBoxHandle = (id: number): void => {
    const todoIndex = todoList.findIndex((el) => el.id === id);
    const todoItem = todoList.splice(todoIndex, 1);

    if (todoItem[0]?.status === TODO) {
      setTodoList([...todoList, { ...todoItem[0], status: DONE }]);
    } else {
      setTodoList([{ ...todoItem[0], status: TODO }, ...todoList]);
    }
  };

  const deleteTodoHandle = (id: number): void => {
    const deleteTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });

    setTodoList(deleteTodo);
  };

  const renderTodoItem = (todo: ITodo): ReactElement => (
    <TodoListItem todo={todo} onChange={onCheckBoxHandle} onDelete={deleteTodoHandle} onEdit={onEditHandler} />
  );
  const onEnterPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <Box className={classes.todoContainer}>
      <Box className={classes.addTodo}>
        <TextField
          value={value}
          className={classes.addTodoInput}
          label="Add Todo"
          onChange={handleChangeValue}
          onKeyPress={onEnterPressHandler}
        />
        <ToggleButtonGroup color="primary" value={filter} exclusive onChange={handleChangeFilter}>
          <ToggleButton className={classes.filterButton} value={ALL}>
            All
          </ToggleButton>
          <ToggleButton value={TODO}>Todo</ToggleButton>
          <ToggleButton value={DONE}>Done</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {todoList.map((todo: ITodo) => (
        <Fragment key={todo.id}>
          {todo.status === filter && renderTodoItem(todo)}
          {ALL === filter && renderTodoItem(todo)}
        </Fragment>
      ))}
    </Box>
  );
};

export default Todos;
