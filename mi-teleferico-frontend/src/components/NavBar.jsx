import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [sw, setSw ] = useState(false);
  const goTo = () => {
    setSw(!sw);
  }
  return (
    <AppBar position='static' color="primary" >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Teleférico
        </Typography>
        <Button color="inherit" onClick={() => goTo}> Info </Button>
        <Button color="inherit"> Buscar </Button>
        <Button color="inherit"> Sugerencias </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;