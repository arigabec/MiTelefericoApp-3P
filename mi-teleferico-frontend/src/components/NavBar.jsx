import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <AppBar position='static' color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Teleférico
        </Typography>
        <Button color="inherit"> Mapa </Button>
        <Button color="inherit"> Buzón </Button>
        <Button color="inherit"> Contacto </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;