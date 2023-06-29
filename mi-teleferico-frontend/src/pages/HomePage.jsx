import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import NavBar from '../components/NavBar';
import { getLineas } from '../services/service';
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [response, setResponse] = useState();

    const getData = async () => {
        const dataLineas = await getLineas();
        setResponse(dataLineas);
    }

    useEffect(()=>{
        getData();
    }, []);

    return (
        <div>
        <NavBar />
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
            {
                response && response.data.map((line => {
                    return (
                        <>
                            <Grid item xs={12} md={4}>
                                <Card>
                                <CardContent>
                                    <Typography variant="h5" component="div" gutterBottom>
                                    {line.attributes.nombre}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    {line.attributes.horarios}
                                    </Typography>
                                </CardContent>
                                </Card>
                            </Grid>
                            </>
                    )
                }))
            }
            </Grid>
        </Container>
        </div>
    );
};

export default HomePage;