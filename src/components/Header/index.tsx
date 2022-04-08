import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { useStyles } from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.header_container}>
      <Button className={classes.button} variant="outlined">
        <Link to="/todos">Todos</Link>
      </Button>
      <Button className={classes.button} variant="outlined">
        <Link to="/photos">Photos</Link>
      </Button>
    </Box>
  );
};

export default Header;
