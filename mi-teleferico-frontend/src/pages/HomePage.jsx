import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import NavBar from '../components/NavBar';
import { getLineas } from '../services/service';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const HomePage = () => {
    

    return (
        <>
        <NavBar />
        
        <Outlet/>
        </>
    );
};

export default HomePage;