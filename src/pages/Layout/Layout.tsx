import React from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import { useStyles } from './styles';

const Layout = () => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Header />
      <Outlet />
    </Box>
  );
};

export default Layout;
