import { useState, useEffect } from 'react';
import { getFiles } from "../services/service";
import { Typography, Box, Slider, Grid, Container } from '@mui/material';

const MapPage = () => {
    const [zoom, setZoom] = useState(0.9);
    const [files, setFiles] = useState();
        
    const getData = async () => {
        const dataFiles = await getFiles();
        setFiles(dataFiles);
    }

    const getImage = (files, filename) => {
        if (files) {
        const url = "http://localhost:1337" + files.filter(file => file.name == filename)[0].url;
        console.log(url);
        return url;
        }
    }

    useEffect(()=>{
        getData();
    }, []);

    const handleZoomChange = (event, newValue) => {
        setZoom(newValue);
    };

    return (
        <Container sx={{ width: 1, height: 1, mt: 2, px: 2 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Box >
                        <Typography variant="h4" gutterBottom sx={{mt: 3}} fontWeight={700}>
                            Mapa de líneas
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '100%',
                                height: '400px',
                                overflow: 'hidden',
                                border: '2px solid black',
                                mt: 3
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    transform: `scale(${zoom})`,
                                    transformOrigin: 'center',
                                }}
                            >
                                <img
                                    src={getImage(files, "mapa.png")}
                                    alt="Image"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </Box>
                        </Box>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: 'column', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            maxWidth: 400, 
                            mx: 'auto', 
                            mt: 4 }}
                        >
                            <Slider
                            value={zoom}
                            onChange={handleZoomChange}
                            aria-labelledby="zoom-slider"
                            min={0.5}
                            max={2}
                            step={0.1}
                            />
                            <Typography variant="h6" gutterBottom>
                                Desliza para hacer zoom
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ border: "GrayText", background: "#abcdef", p: 5 , mt: 11}}>
                        <Typography variant="h4" gutterBottom fontWeight={700} sx={{textDecoration: "underline"}}>
                            Anuncios
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt:3}}>
                            Estimado usuario, le comunicamos que las siguientes líneas se encuentran en mantenimiento:
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt:1 }}>
                            → Ninguna en estos momentos.
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt:5}}>
                            Las líneas con rutas interrumpidas son:
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt:1}}>
                            → Línea Cafe
                        </Typography>
                        <Typography variant="h6" gutterBottom sx={{mt:1}}>
                            → Línea Plateada
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MapPage;