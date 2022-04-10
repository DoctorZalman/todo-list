import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ITodo } from '../../interfaces/interface';

const SingleTodo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<ITodo | null>(null);

  useEffect(() => {
    if (id) {
      const todos: any = JSON.parse(localStorage.getItem('todo') as string);

      const todoItem = todos.find((el: ITodo) => el.id === +id);

      setTodo(todoItem);
    }
  }, []);

  return <div>{todo?.valueTodo}</div>;
};

export default SingleTodo;
