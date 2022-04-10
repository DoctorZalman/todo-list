import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Todos from './pages/Todos/Todos';
import Layout from './pages/Layout/Layout';
import Photos from './pages/Photos/Photos';
import SingleTodo from './pages/SingleTodo';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Box>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/todos" element={<Todos />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/todos/:id" element={<SingleTodo />} />
          </Route>
        </Routes>
      </Box>
    </Provider>
  );
};

export default App;
