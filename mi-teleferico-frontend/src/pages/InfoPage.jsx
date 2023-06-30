import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getLineas } from "../services/service";
import LinePage from "./LinePage";

const InfoPage = () => {

    const [response, setResponse] = useState();

    const getData = async () => {
        const dataLineas = await getLineas();
        setResponse(dataLineas);
    }

    useEffect(()=>{
        getData();
    }, []);
    return(
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
            {
                response && response.data.map((line => {
                    console.log(line)
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
            <LinePage/>
        </Container>
    );
}
export default InfoPage;