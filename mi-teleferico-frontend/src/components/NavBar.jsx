import React, { memo, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const goTo = (direccion) => {
    navigate(direccion)
  };
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Mi Teleférico
        </Typography>
          <Button color="inherit" onClick={() => goTo('/info')}>
            Info
          </Button>
          <Button color="inherit" onClick={() => goTo('/mapa')}>
            Mapa
          </Button>
          <Button color="inherit" onClick={() => goTo('/buscar')}> Buscar/Sugerencias </Button>
      </Toolbar>
    </AppBar>
  );
};

export default memo(NavBar);
