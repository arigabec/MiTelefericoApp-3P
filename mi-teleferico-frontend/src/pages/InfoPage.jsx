import { Card, CardMedia, CardContent, Container, Grid, Typography, CardActionArea } from "@mui/material";
import { useEffect, useState } from "react";
import { getLineas, getFiles, getEvents } from "../services/service";
import LineCard from "../components/LineCard";


const InfoPage = () => {
    const [response, setResponse] = useState();
    const [files, setFiles] = useState();
    const [events, setEvents] = useState();

    const getData = async () => {
        const dataLineas = await getLineas();
        setResponse(dataLineas);

        const dataFiles = await getFiles();
        setFiles(dataFiles);

        const dataEvents = await getEvents();
        setEvents(dataEvents);
    }

    useEffect(()=>{
        getData();
    }, []);

    const getImage = (files, filename) => {
        if (files) {
            const url = "http://localhost:1337" + files.filter(file => file.name == filename)[0].url;
         //   console.log(url);
            return url;
        }
    }

    return(
        <Container sx={{ mt: 2 }}>
            <Typography sx={{ fontSize: 30, mb: 2 }} color="text.secondary" gutterBottom>
                Nuestras líneas
            </Typography>
            <Grid container spacing={2}>
            {
                response && response.data.map((line => 
                    <LineCard line={line}/>))
            }
            </Grid>
            <Typography sx={{ fontSize: 30, mt: 7, mb:2 }} color="text.secondary" gutterBottom>
                Eventos y noticias
            </Typography>
            <Grid container spacing={2}>
            {
                events && events.data.map((event => {
                    return (
                        <>
                            <Grid item xs={12} sm={3} style={{ textAlign: 'center' }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        { event.attributes.imagen && (
                                            <CardMedia
                                                sx= {{height: 200}}
                                                component="img"
                                                src={getImage(files, event.attributes.imagen)}
                                                alt="event"
                                            />
                                        )}
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
                                            {event.attributes.titulo}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {event.attributes.descripcion}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </>
                    )
                }))
            }
            </Grid>
        </Container>
    );
}
export default InfoPage;